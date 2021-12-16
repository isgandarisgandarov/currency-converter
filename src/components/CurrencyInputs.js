import React from 'react';
import './CurrencyInputs.css';

function CurrencyInputs({data = [], currency = '', onChangeFunc}) {
    return (
        <div>
            <select value={currency} onChange={onChangeFunc}>
                {data.map( (opt, index) => {
                    return <option key={index} value={opt}>{opt}</option>
                })}
            </select>
        </div>
    )
}

export default CurrencyInputs
