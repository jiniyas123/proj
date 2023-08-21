import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
  setAlert(
    {
      msg:message,
      type:type
    }
  )
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  const toggleMode= ()=>{
     if(mode==="light")
     {
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils- Dark mode';
     }
     else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils- Light mode';
     }
  }
  return (
    <>
    {/* <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/About">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
           
          </Route>
        </Switch>
       
        
        </div>
        </Router>  */}
         <Router>

      

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>

<div className="container my-3">

         

    <Routes>

      <Route exact path="/about" element={<About/>} >



      </Route>



      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>



      </Route>

    </Routes>





</div>



</Router>



    </>
  );
}

export default App;
