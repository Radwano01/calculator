
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")

  const handleRemove = ()=>{
    setValue("")
  }

  const handleBack = ()=>{
    setValue(value.slice(0,-1))
  }

  const evalueExpresion =()=>{
    try{
      const evaluar = eval(value)
      setValue(evaluar.toString())
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className="calculator">
      <div className="border">
        <input type="text" className="display" value={value}  onClick={e => setValue(value + e.target.value)}/>
          <button value="1" onClick={e => setValue(value + e.target.value)}>1</button>
          <button value="2" onClick={e => setValue(value + e.target.value)}>2</button>
          <button value="3" onClick={e => setValue(value + e.target.value)}>3</button>
          <button value="/" onClick={e => setValue(value + e.target.value)}>/</button>
          <button value="4" onClick={e => setValue(value + e.target.value)}>4</button>
          <button value="5" onClick={e => setValue(value + e.target.value)}>5</button>
          <button value="6" onClick={e => setValue(value + e.target.value)}>6</button>
          <button value="*" onClick={e => setValue(value + e.target.value)}>*</button>
          <button value="7" onClick={e => setValue(value + e.target.value)}>7</button>
          <button value="8" onClick={e => setValue(value + e.target.value)}>8</button>
          <button value="9" onClick={e => setValue(value + e.target.value)}>9</button>
          <button value="+" onClick={e => setValue(value + e.target.value)}>+</button>
          <button value="0" onClick={e => setValue(value + e.target.value)}>0</button>
          <button value="." onClick={e => setValue(value + e.target.value)}>.</button>
          <button value="RESET" onClick={handleRemove}>R</button>
          <button value="Back" onClick={handleBack}>Back</button>
          <button value="-" onClick={e => setValue(value + e.target.value)}>-</button>
          <button value="=" onClick={evalueExpresion}>=</button>
      </div>
    </div>
  );
}

export default App;
