import React, { useState, useContext } from 'react'
import { GlobalContext, PASS } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()
    // const [isCredit, setIsCredit] = useState(true)
    // console.log(isCredit);
    // const PASS = 'Hrushi@476';
    const { addTransaction } = useContext(GlobalContext)

    function createTransaction(isCredit) {
        if (isCredit) {
            const newTransaction = {
                text,
                amount: +amount
            }
            addTransaction(newTransaction);
        }
        else {
            const newTransaction = {
                text,
                amount: -amount
            }
            addTransaction(newTransaction);
        }
        // let pass = prompt('Enter password');
        // if(pass === PASS){
        // }
        // else{
        //     alert('Wrong Password!');
        // }
    }
    return (
        <>
            <h3>Add new transaction</h3>
            {/* <form onSubmit={onSubmit}> */}
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter name..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /></label
                >
                <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter amount..." />
            </div>
            <div className='transaction-buttons'>
                <button className="btn" onClick={() => {
                    // setIsCredit(true);
                    createTransaction(true);
                }}>Credit Amount</button>
                <button className="btn" onClick={() => {
                    // setIsCredit(false);
                    createTransaction(false);
                }}>Debit Amount</button>

            </div>
            {/* </form> */}
        </>
    )
}
