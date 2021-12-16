import React from 'react';
import './AmountInput.css';

function AmountInput({onChangeFunction}) {
    return (
        <div className='form'>
            <input type='number' id='amount' placeholder='Amount' onChange={onChangeFunction}/>
        </div>
    )
}

export default AmountInput
