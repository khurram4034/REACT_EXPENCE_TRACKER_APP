import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState";
import '../Components/Balence.css';

export const Balence = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div className='balence'> 
            <h4>Your Balance</h4>
            <div className='balence__total'>
                <h3>$ {total}</h3>
            </div>
        </div>
    )
}