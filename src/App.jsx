import {useState,useEffect} from 'react';

const App = () => {
  
  const [category, setCategory] = useState("");
  const [newComment, setNewComment] = useState("")
  const [comment, setComment] = useState("Comment here")

  // Handler for changing color.
  const handleColorChange = (category) => {
     setCategory(category);
     console.log(category);
  } 

  // Handler for adding a new comment.
  // TODO: Change to actually save comment, now only most recent one is saved.
  const addComment = (event) => {
    event.preventDefault();
    setComment(newComment)
    //console.log(event.target.value)
  }

  // onChange-jandler for form-element.
  const addNewComment = (event) => {
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
      <div className="commentBox">
        {/* TODO: Change to actually save all comments, and show them on the website */}
        <p>{comment}</p>
          <form onSubmit={addComment}>
          <input name="commentInput" value={newComment}
            onChange={addNewComment}/>
          <button type="submit">Tallenna</button>
        </form>
      </div>
    </div>
  )
}

export default App
