import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { MdDelete} from 'react-icons/md';

export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}
        <MdDelete onClick={()=> deleteTransaction(transaction.id)} className='delete-btn' color='red' />
        </span>
    </li>
    )
}
