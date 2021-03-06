import React from "react"
import { Link } from 'react-router-dom'
import "./HeaderImage.css"
// import { Link } from "react-router-dom"

const HeaderImage = () => {
  return (
    
    <div className="bg_image">
      <div className="message-box">
        <div className="alignment-box">
        <h1 className="Barc">
            <i>BARC</i> Shelter
          </h1>
          <h2 className="Adopt">ADOPT YOUR NEW BEST FRIEND TODAY!</h2>
        <Link to="/adopt">
          <button className="Adopt-me">Adopt Me!</button>
        </Link>

        </div>

      
      </div>
    </div>
  );
}

export default HeaderImage
