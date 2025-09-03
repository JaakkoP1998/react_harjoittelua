import {useState,useEffect} from 'react';

const App = () => {
  
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("Comment here")

  // "category" -nimisen select elementin käsittelijä
  const handleColorChange = (category) => {
     setCategory(category);
     console.log(category);
  } 

  // Uuden kommentin "lisääminen". Ei toimi tällä hetkellä
  // TODO: muuta niin, että oikeasti lisätään kommentti.
  const addComment = (event) => {
    event.preventDefault();
    setComment(event.target.value)
    console.log(event.target)
  }

  // H2-elementti saa taustavärinsä select-elementin valinnoista.
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
        {/* TODO: muokkaa niin, että kommentit tallennetaan jonnekin, 
        että kaikki näkyvät, eikä vaan uusin */}
        <p>{comment}</p>
          <form onSubmit={addComment}>
          <input name="commentInput" />
          <button type="submit">Tallenna</button>
        </form>
      </div>
    </div>
  )
}

export default App
