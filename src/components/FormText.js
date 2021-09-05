import React, { useState } from "react";

export default function FormText(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    let newText = '';
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("Box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Copied to clipboard","success");
}
  const [text, setText] = useState("");
  // text = " new text"; // Wrong way to change the state
  // setText = " new text"; // correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className = "mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Type Or Paste Your Content Here" autoFocus=""
            style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
            id="Box"
            rows="8"
          ></textarea>
          
        </div>
        <button disabled = {text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled = {text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled = {text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button disabled = {text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        {/* <button className="btn btn-warning mx-2" onClick={Italic}>
          style
        </button> */}
      </div>

      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter((word)=>{return word.length!==0}).length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(/\s+/).filter((word)=>{return word.length!==0}).length} minutes to read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
