import {useState,useEffect} from 'react';
import commentService from './services/comments'

// Import own modules last for readability.
import ColorChanger from './components/ColorChanger';
import Comment from './components/Comment'
import Information from './components/CreatorInformation';
import Education from './components/Education';
import Experience from './components/JobExperience';

const App = () => {
  
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([])

  // Get json data from "server", i.e from json-file.
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
    const commentObject = {
      content: newComment,
      id: String(comments.length + 1)
    }

    commentService
      .create(commentObject)
        .then(returnedComment => {
        setComments(comments.concat(returnedComment))
        setNewComment("")
      })
  }

  // onChange-handler for form-element.
  const onCommentChange = (event) => {
    event.preventDefault();
    setNewComment(event.target.value);
    //console.log(event.target.value);
  }

  return (
    <div className='mainContent'>
      <Information />
      <Education />
      <Experience />
      <ColorChanger />
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
