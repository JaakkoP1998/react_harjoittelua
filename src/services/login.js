// This file is for handling API calls regarding login functions to back-end.
import axios from "axios"
const baseUrl = 'http://localhost:3001/api/login'

// Send asynchonous request to back-end API and return data from response.
const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }