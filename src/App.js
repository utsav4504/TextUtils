import './App.css';

import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React,{ useState} from 'react';


function App() {
  const[mode,setMode]=useState('light');
  
  const[color,setColor]=useState('off');

  const changeColor=()=>{
    if(mode==='light'){
      
      if(color==='off'){
        setColor('on')
        document.body.style.backgroundColor='#e6e2cc';
      }
      else{
        setColor('off')
        document.body.style.backgroundColor='#b1c2a1';
      }
    }
    else{
      if(color==='off'){
        setColor('on')
        document.body.style.backgroundColor='#103b4f';
      }
      else{
        setColor('off')
        document.body.style.backgroundColor='#042743';
      }
    
      
    }
  }
  
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
     setMode('dark')
     setColor('off');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success");
      
    }
    else{
      
      setMode('light')
      setColor('off')
      document.body.style.backgroundColor='#b1c2a1'
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
<>

  
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color} changeColor={changeColor} />
<Alert alert={alert}/>
<div className="conatiner">
<TextForms showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> 

</div>

</>
  );
}

export default App;