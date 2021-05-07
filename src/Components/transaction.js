import React from 'react'

const Transaction = (props) => {

    return (
    <React.Fragment>
        <div>Payee Id: {props.transaction.payeeID} Date: {props.transaction.date} amount: {props.transaction.amount}</div>
    </React.Fragment>)
}

export default Transaction;