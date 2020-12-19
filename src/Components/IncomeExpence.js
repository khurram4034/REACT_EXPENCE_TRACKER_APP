import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import '../Components/IncomeExpence.css';

export const IncomeExpence = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item >0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc += item), 0) * -1
        );
    return (
        <div className='incomeExpence'>
            
            <div className='income__total'>
                <h5>INCOME</h5>
                <h4 className='income'>$ {income}</h4>
            </div>
            
            <div className='expence__total'>
                <h5>EXPENCE</h5>
                <h4 className='expence'>$ {expense}</h4>
            </div>
        </div>
        
    )
}
