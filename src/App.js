import React, { useState, useEffect } from 'react';
import './App.css';
import CurrencyInputs from './components/CurrencyInputs';
import SubmitButton from './components/SubmitButton';
import ParticleEffect from './components/ParticleEffect';
import AmountInput from './components/AmountInput';

function App() {
  const [result, setResult] = useState([]);
  const [selectOptions, setOptions] = useState([]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [amount, setAmount] = useState();
  const [finalAmount, setFinalAmount] = useState();

  useEffect( () => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=4f14bff1d8b12546d8209703016d5ab4')
      .then( response => response.json()).then( data => {
        setResult(data);
        setOptions([data.base, ...Object.keys(data.rates)]);
        setFrom(data.base)
        setTo(Object.keys(data.rates)[0])
      }).catch(e => console.log(e));
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    let fromRate = result.rates[`${from}`];
    let toRate = result.rates[`${to}`];
    setFinalAmount(toRate / fromRate * amount);
  }

  return (
    <div className="App">
      <ParticleEffect/>
      <h1>Currency Converter</h1>
      <AmountInput onChangeFunction={e => setAmount(e.target.value)}/>
      <CurrencyInputs data={selectOptions} currency={from} onChangeFunc={e => setFrom(e.target.value)}/>
      <CurrencyInputs data={selectOptions} currency={to} onChangeFunc={e => setTo(e.target.value)}/>
      <br/>
      <input type='number' id='result' placeholder='Result' value={finalAmount} disabled/>
      <br/>
      <SubmitButton name='Convert' customClickEvent={handleClick}/>
    </div>
  );
}

export default App;
