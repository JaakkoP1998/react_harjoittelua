import { useState, useEffect } from "react"
import loginService from "../services/login"
import commentService from "../services/comments"

// Component for login form.
const LoginForm = () => {
    // Variables for login form inputs.
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    // Variable for logged in user.
    const [user, setUser] = useState(null)
    
    // Check if user is already found from local storage.
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            commentService.setToken(user.token)
        }
    }, [])

    // Handler for submitting form. 
    const handleLogin = async event => {
        event.preventDefault()
        //console.log("Logged in as:", username)

        try {
            // Send credentials to loginService
            const loggedUser = await loginService.login({ username, password })

            // Save user to local storage.
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(loggedUser)
            ) 

            commentService.setToken(loggedUser.token)
            // Set logged in user and nullify login form.
            setUser(loggedUser)
            setUsername('')
            setPassword('')
        } catch (error) {
            // Print error if login not successfull.
            // console.log('wrong credentials')
            console.error(error)
            alert("Wrong username or credentials.")
        }
    }

    // Handler for logging out.
    const handleLogOut = (event) => {
        event.preventDefault()
        // Remove user from local storage.
        window.localStorage.removeItem('loggedUser')
        // Refresh page so that the logout is successfull.
        window.location.reload()
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        username
                        <input
                        type="text"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        password
                        <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        />
                    </label>
                </div>
                <button type="submit"> Login </button>
            </form>
            <button onClick={handleLogOut}> Logout </button>
            {/* Conditional rendering for showing logged in user's name.*/}
            {user && (
                <div>
                    <p>{user.name} logged in</p>
                </div>
            )}
        </div>
    )
}

export default LoginForm