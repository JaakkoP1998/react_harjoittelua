import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

// Comments for testing.
// TODO: Later to be saved somewhere else, maybe start with basic json-file.
const comments = [
  {
    id: 1,
    content: 'HTML is easy'
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript'
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App comments={comments} />)