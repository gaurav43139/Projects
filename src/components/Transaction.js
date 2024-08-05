import React from 'react'
import { GlobalContext } from '../context/GlobalState'; 
import { useContext } from 'react';

const Transaction = ({transaction}) => {
  //By writing const {deleteTransaction}, you are creating a constant variable named deleteTransaction that directly references the deleteTransaction property from the context object.
  const {deleteTransaction} = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus' } >
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li> 
  )
}

export default Transaction
