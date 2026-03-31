// This file is for handling API calls regarding comments to back-end.

import axios from 'axios'
// This URL is for testing locally:
const baseUrl = 'http://localhost:3001/api/comments'

// This URL points to my Render-webservice.
// const baseUrl = 'https://react-express-practice.onrender.com/api/comments'

// Variable for logged in user's token,
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

// TODO: Create Error Responses.

// Call for getting all the comments.
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Call for adding new comments.
const create = async newObject => {
  
  // Config variable that contains user's token.
  const config = {
    headers: { Authorization: token }
  }

  // URL to be called, comment to be added and user-token 
  // are given to Axios as parameters.
  const response = await axios.post(baseUrl, newObject, config)  

  return response.data
}

// Call to update comment. TODO: Add way to users modify their comments.
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// TODO: create method for deleting comments.

export default { getAll, create, update, setToken }