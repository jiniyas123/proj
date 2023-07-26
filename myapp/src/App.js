import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
        <TextForm heading="Enter the text to analyze"/>
        </div>
      
    </>
  );
}

export default App;
