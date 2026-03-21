import { useState } from "react"
import loginService from "../services/login"
import commentService from "../services/comments"

// Component for login form.
const LoginForm = () => {
    // Variables for login form inputs.
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    // Variable for logged in user.
    const [user, setUser] = useState(null)

    // Handler for submitting form. 
    const handleLogin = async event => {
        event.preventDefault()
        //console.log("Logged in as:", username)

        try {
            // Send credentials to loginService
            const loggedUser = await loginService.login({ username, password })
            console.log("LOGIN RESPONSE:", loggedUser)

            commentService.setToken(loggedUser.token)
            // Set logged in user and nullify login form.
            setUser(loggedUser)
            // Simple alert window, for showing if login was successfull or not.
            alert(`Logged in as ${username}`)
            setUsername('')
            setPassword('')
        } catch (error) {
            // Print error if login not successfull.
            // console.log('wrong credentials')
            console.error(error)
            alert("Wrong username or credentials.")
    }
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
                <button type="submit"> login </button>
            </form>
            {/* Usernames conditional rendering */}
            {user && (
                <div>
                    <p>{user.name} logged in</p>
                </div>
            )}
        </div>
    )
}

export default LoginForm