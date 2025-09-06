import {useState,useEffect} from 'react';
import Comment from './components/Comment'

const App = (props) => {
  
  const [category, setCategory] = useState("");
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState(props.comments)

  // Handler for changing color.
  const handleColorChange = (category) => {
     setCategory(category);
  } 

  // Handler for adding a new comment.
  const addComment = (event) => {
    event.preventDefault();
    const commentObject = {
      content: newComment,
      id: String(comments.length + 1)
    }
    setComments(comments.concat(commentObject))
    setNewComment("")
    //console.log(event.target.value)
  }

  // onChange-handler for form-element.
  const onCommentChange = (event) => {
    event.preventDefault();
    setNewComment(event.target.value);
    //console.log(event.target.value);
  }

  // H2 gains its color from select-choices.
  return (
    <div>
      <div>
        <h1>Greetings</h1>
        <h2 style={{ backgroundColor: category || 'transparent', padding: '10px' }} >Box for testing</h2>
      </div>
      <select name="category" 
        value={category} onChange={event => handleColorChange(event.target.value)}>
            <option value="">Select Color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
      <div className="commentForm">
        {/* TODO: Change to actually save all comments, and show them on the website */}
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
