// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import { useState } from 'react';
import Alert from './Alert.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => { 
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => { 
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#732d2d';
      showAlert('Turned into Dark Mode','info')
    }
    else { 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Turned into Light Mode','primary')
    }
  }




  // let greeting = <b>Good Morning</b>;

  //What we have learned in lecture 2
  //Functional based hooks
  // class based this keyword
  //this => what object is active at that time
  //props:properties
  //default props and default parameters
  return (
    <>
      
      <BrowserRouter> 
        <Routes>

          {/* Look at 'exact' keyword */}

          <Route exact path='/' element={
            <>
              
              <Navbar title="Cool!" link="Links" mode={mode} toggleMode={toggleMode} />
              <Alert alert1={ alert} />
              < TextForm mode={mode} showAlert={showAlert} />
              
            </>
          } />
          
          <Route path='/About' element={<>
            <Navbar title="Cool!" link="Links" mode={mode} toggleMode={toggleMode} />
            <Alert alert1={ alert} />
            <About mode={ mode} />
          </>
          } />


        </Routes>
      </BrowserRouter>
      {/* <Navbar title="Cool!" link="Links" mode={mode} toggleMode={toggleMode} /> */}
      
      {/* < TextForm mode={mode} showAlert={ showAlert} /> */}
      {/* <About/> */}
      {/* <br></br>
      <br></br>
      <br></br> */}
      {/* <l1> Hello { greeting}</l1> */}
    </>
  );
}

export default App;
