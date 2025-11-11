import axios from 'axios'
// This URL is for testing locally:
const baseUrl = 'http://localhost:3001/api/comments'

// This URL points to my Render-webservice.
//const baseUrl = 'https://react-express-practice.onrender.com/api/comments'

// TODO: Create Error Responses.
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }