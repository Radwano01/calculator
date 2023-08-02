import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleRemove = () => {
    setValue('');
  };

  const handleBack = () => {
    setValue(value.slice(0, -1));
  };

  const evaluateExpression = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (err) {
      console.log(err);
    }
  };

  const handleButtonClick = (e) => {
    setValue(value + e.target.value);
  };

  return (
    <div className="calculator">
      <div className="display-container">
        <input
          type="text"
          className="display"
          value={value}
          readOnly
            placeholder="0"
        />
      </div>
      <div className="buttons-container">
        <div className="row">
          <button className="numeric" value="7" onClick={handleButtonClick}>7</button>
          <button className="numeric" value="8" onClick={handleButtonClick}>8</button>
          <button className="numeric" value="9" onClick={handleButtonClick}>9</button>
          <button className="operator" value="/" onClick={handleButtonClick}>/</button>
        </div>
        <div className="row">
          <button className="numeric" value="4" onClick={handleButtonClick}>4</button>
          <button className="numeric" value="5" onClick={handleButtonClick}>5</button>
          <button className="numeric" value="6" onClick={handleButtonClick}>6</button>
          <button className="operator" value="*" onClick={handleButtonClick}>*</button>
        </div>
        <div className="row">
          <button className="numeric" value="1" onClick={handleButtonClick}>1</button>
          <button className="numeric" value="2" onClick={handleButtonClick}>2</button>
          <button className="numeric" value="3" onClick={handleButtonClick}>3</button>
          <button className="operator" value="+" onClick={handleButtonClick}>+</button>
        </div>
        <div className="row">
          <button className="numeric" value="0" onClick={handleButtonClick}>0</button>
          <button className="numeric" value="." onClick={handleButtonClick}>.</button>
          <button className="special" value="RESET" onClick={handleRemove}>R</button>
          <button className="operator" value="-" onClick={handleButtonClick}>-</button>
        </div>
        <div className="row">
          <button className="equal" value="=" onClick={evaluateExpression}>=</button>
          <button className="special" value="Back" onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default App;
