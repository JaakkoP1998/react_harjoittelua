import { useState } from "react"

// Component for changing backgroundcolors of the H2-title with select.
const ColorChanger = () => {
    const [category, setCategory] = useState("");

    // Handler for changing color.
    const handleColorChange = (category) => {
        setCategory(category);
    } 

    return <div>
    <div className="colorBox">
        <h1>Greetings</h1>
        {/* H2-element gets background color from select-choices. */}
        <h2 style={{ backgroundColor: category || 'transparent', padding: '10px' }} > Box for testing </h2>
      </div>
      <select name="category" 
        value={category} onChange={event => handleColorChange(event.target.value)}>
            <option value="">Select Color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
    </div>
}

export default ColorChanger