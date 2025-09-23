import { useState } from "react"
import picture from "../assets/OmaKuva.PNG"

// Basic information of the creator (me), mainly used for CSS-testing.
const Information = () => {
  const [frameColor, setFrameColor] = useState("");

  // Handler for changing color.
    const handleFrameColorChange = (color) => {
        setFrameColor(color);
    } 

  return <div className="basicInformation">
    <h3>Jaakko Palm</h3>
    <img className="picture" src={picture} alt="Creators Picture" style={{borderColor: frameColor || 'black'}}/>
    <select name="category" 
        value={frameColor} onChange={event => handleFrameColorChange(event.target.value)}>
            <option value=""> Select Picture Frame's Color </option>
            <option value="red"> Red </option>
            <option value="green"> Green </option>
            <option value="blue"> Blue </option>
            <option value="black"> Black </option>
        </select>
    <p> Email: jaakkop1998@gmail.com </p>
    <a href="https://github.com/JaakkoP1998"> GitHub </a>
    <a href="https://www.linkedin.com/in/jaakko-palm-68704014a/"> LinkedIn </a>
  </div>
}

export default Information