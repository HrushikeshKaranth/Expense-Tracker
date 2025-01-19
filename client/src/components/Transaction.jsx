import React, { useContext } from 'react'
import { GlobalContext, PASS } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    function deleteThisTransaction(){
        deleteTransaction(transaction._id);
        // let pass = prompt('Enter password');
        // if(pass === PASS){
        // }
        // else{
        //     alert('Wrong password!');
        // }
    }

    return (
        <li className={transaction.amount < 0 ? 'minus': 'plus'}>
            {transaction.text} <span>{sign}₹{numberWithCommas(Math.abs(transaction.amount))}</span>
            <button onClick={()=>deleteThisTransaction()} className="delete-btn">x</button>
        </li>
    )
}
