import {useState,useEffect} from 'react';

const App = () => {
  
  const [category, setCategory] = useState('');

  // "category" -nimisen select elementin käsittelijä
  const handleColorChange = (category) => {
     setCategory(category);
     console.log(category);
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
    </div>
  )
}

export default App
