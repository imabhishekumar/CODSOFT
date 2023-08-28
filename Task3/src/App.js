import React, { useState } from "react";
import Buttons from './components/Buttons';
import Result from './components/Result';
import './App.css'

function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     result: "0",
  //   }
  //   this.handleclicks = this.handleclicks.bind(this);
  // }

  const [result, setResult] = useState('0')

  function handleclicks(value) {
    try {
      switch (value) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case '+':
        case '-':
        case '/':
        case '*':
          if (result === "0" || result==="ERROR") {
            setResult(value)
  
          } else {
            setResult(result + value)
          }
          break;
        case '=':
          setResult(eval(result))
          break;
        case 'c':
          setResult('0')
          break;
        case '+/-':
          setResult(parseInt(result, 10) * -1)
          break;
        case '%':
          setResult(parseFloat(result, 10) / 100)
          break;
        default:
          break;
      }  
    } catch (error) {
      console.log(error);
      setResult("ERROR")
      
    }
    
  }

      return ( 
          <div className = "calculator-wrapper" >
            <Result result = { result }/> 
            <Buttons Buttonclicked = {
              handleclicks
            }/> 
          </div>
    );
  }

export default App;