import React,{useState} from "react";
export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("You clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick=()=>{
    //console.log("You clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }
  const handleClearText=()=>{
    setText('')
    props.showAlert("Text cleared","success");
  }
  const handleUploadText=()=>{
    // Create an input element (hidden)
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt'; // Optional: Limit file selection to .txt files
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        setText(e.target.result);
      };
      reader.readAsText(file);
    };
// Trigger the file input click event
    input.click();
    props.showAlert("Upload now","success");
  };
  const handleDownload=()=>{
      
       if (!text) {
        alert("There's no text to download. Please upload a text file first.");
        return;
      }
  
      // Create a new Blob with the text content
      const blob = new Blob([text], { type: 'text/plain' });
  
      // Create a temporary URL for the Blob
      const url = URL.createObjectURL(blob);
  
      // Create a temporary anchor element for the download
      const tempAnchor = document.createElement('a');
      tempAnchor.href = url;
      tempAnchor.download = 'uploaded_text.txt'; // Set the filename for download
      document.body.appendChild(tempAnchor);
  
      // Simulate a click on the anchor element to trigger the download
      tempAnchor.click();
  
      // Remove the temporary anchor and URL object
      document.body.removeChild(tempAnchor);
      URL.revokeObjectURL(url);
      props.showAlert("Downloading","success");
      
    }

   
  



  const handleOnChange = (event)=>{
        // console.log("On change");
         setText(event.target.value)
  }
  const[text,setText]=useState("Write here");
  //text="New text"; wrong way
  //setText("new text") //write way
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
        </label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1f1b1b':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary my-1 mx-2" onClick={handleClearText}>Clear text</button>
      <button className="btn btn-primary my-1 mx-2" onClick={handleUploadText}>Upload</button>
      <button className="btn btn-primary my-1 mx-2" onClick={handleDownload}>Download</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </> 
  );
}
