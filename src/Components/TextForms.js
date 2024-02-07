import React, { useState } from 'react'
export default function TextForms(props) {

  const handleUpClick=()=>{
   
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Uppercase!","success")
  }
  const handleClearClick=()=>{
   
    let newText=''
    setText(newText)
    props.showAlert("Text cleared!","success")
  }
  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            
        }
    })
    setText(joinedWords);
    props.showAlert("Handle extra spaces!","success")
}
 
  const handleCopyClick=()=>{
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak!","success")
  }
  
  const handleDownClick=()=>{
    const link = document.createElement("a");
    const content = document.querySelector("textarea").value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
    props.showAlert("text downloaded!","success")
  }
  const handleLoClick=()=>{
   
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("text converted to lowercase!","success")
  }
  const handleOnchange=(event)=>{

   setText(event.target.value)

  }
  const [text, setText] = useState('');

  return (
    <>
 <div className="container"style={{backgroundColor:props.mode==='#b1c2a1'?'#042743':'dark',color:props.mode==='light'?'#042743':'white'}}  >
 

    <h2 >{props.heading}</h2>
    <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#97accb':'white',color:props.mode==='light'?'#042743':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-2"disabled={text.length===0}  onClick={handleLoClick}>Convert to Lowercase</button>

<button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleCopyClick}>Copy to Clipboard</button>

<button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleDownClick}>Download Text</button>
<button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
<button type="submit" onClick={speak} disabled={text.length===0} className="btn btn-warning mx-2 my-2">Speak</button>

    </div>
    <div className='container my-3' style={{backgroundColor:props.mode==='#b1c2a1'?'#042743':'dark',color:props.mode==='light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      
    <p>
{text.length===0?0:text.trim().split(/\s+/).length} words and {text.length} characters</p>
    <p>{0.008*(text.length===0?0:text.trim().split(/\s+/).length)} Minutes read</p>
  
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}