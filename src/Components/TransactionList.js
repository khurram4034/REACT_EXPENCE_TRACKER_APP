import React, { useContext } from 'react';
import { Transaction } from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";
import '../Components/TransactionList.css';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
    return (
        <>
            <h3 className='text__t'><span className='text__e'>Transaction</span> History</h3>
            <br />
            <hr />
            <ul className='list'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />) )}
                
            </ul>
        </>
    )
}
