import React, { useState, useContext } from 'react';
import '../Components/AddTransaction.css';
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <div className='addTransaction'>  
        <br />
            <hr />
            <br />
            <h3 className='text__t'><span className='text__e'>New</span>  Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label className='text'>Text</label>
                    <input type='text' value={text} onChange={(e)=>setText(e.target.value)} required='required' placeholder='Enter Text ...' />
                </div>
                <div className='form-control'>
                    <label className='amount'>Amount
                    (negative - expence, positive - income)
                    </label>
                    <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} required='required' placeholder='Enter Amount ...' />
                </div>
                <br />
                <button className='btn'>Add Transaction</button>
            </form>
            <br />
        </div>
    )
}

