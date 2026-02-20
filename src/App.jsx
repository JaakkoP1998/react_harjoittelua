import {useState,useEffect} from 'react'
import commentService from './services/comments'

// Import all own modules here for better readability.
import LoginForm from './components/LoginForm'
import ColorChanger from './components/ColorChanger'
import Comment from './components/Comment'
import Information from './components/CreatorInformation'
import Education from './components/Education'
import Experience from './components/JobExperience'

const App = () => {
  
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([])

  // Get comment-data from service.
  useEffect(() => {
    commentService
      .getAll()
        .then(initialComments => {
        setComments(initialComments)
      })
  }, [])

  // Handler for adding a new comment.
  const addComment = (event) => {
    event.preventDefault();
    // Constructor for comment-object
    const commentObject = {
      content: newComment,
      id: String(comments.length + 1)
    }
    // Save comment through service.
    commentService
      .create(commentObject)
        .then(returnedComment => {
        // Update current comments after saving new one.
        setComments(comments.concat(returnedComment))
        setNewComment("")
      })
  }

  // onChange-handler for form-element.
  const onCommentChange = (event) => {
    event.preventDefault();
    setNewComment(event.target.value);
  }

  // TODO: Create english translation and feature to swich languages.
  return (
    <div className='mainContent'>
      <Information />
      <Experience />
      <Education />
      <ColorChanger />
      <LoginForm />
      <div className="commentForm">
        <div className="commentBox">
          <h1>Comments</h1>
          <ul>
            {comments.map(comment => 
              <Comment key={comment.id} comment={comment} />
            )}
          </ul>
        </div>
          <form onSubmit={addComment}>
          <input name="commentInput" value={newComment}
            onChange={onCommentChange}/>
          <button type="submit">Tallenna</button>
        </form>
      </div>
    </div>
  )
}

export default App
