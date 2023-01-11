import React from 'react'
import './Createpost.css'

function Createpost() {
  return (
    <div className='card create-post-container'>
        <input type="text" placeholder='post title'/>
        <input type="text" placeholder='post content'/>
        <div className="file-field input-field">
      <div className="btn #64b5f6 blue darken-1">
        <span>Upload post image</span>
        <input type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
        <button class=" btn waves-effect waves-light btn  #64b5f6 blue darken-1">submit post</button>

      </div>
    </div>
        

        
    </div>
  )
}

export default Createpost