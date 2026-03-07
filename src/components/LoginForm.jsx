import { useState } from "react"
import loginService from "../services/login"

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
            const user = await loginService.login({ username, password })
            // Set logged in user and nullify login form.
            setUser(user)
            console.log(user)
            // Simple alert window, for showing if login was successfull or not.
            alert(`Logged in as ${username}`)
            setUsername('')
            setPassword('')
        } catch {
            // Print error if login not successfull.
            // console.log('wrong credentials')
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
        </div>
    )
}

export default LoginForm