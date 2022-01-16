import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("on Change")
        setText(event.target.value);
    }

    const handleLoClick =()=>{
        // console.log("lowercase was clicked" + text)
        let newText2 = text.toLowerCase();
        setText(newText2)
    }

    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter text here2');
   // text = "new text"; // wrong way to change the state
    //setText("new text"); // correct way to change the state
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-secondary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
