// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#696969';
      showAlert("Dark Mode has been enabled")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <strong><Alert alert={alert}/></strong>
      <div className="container my-3">
        {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About/> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze" mode={mode}/>
            {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
