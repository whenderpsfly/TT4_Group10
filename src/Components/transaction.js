import React from 'react'
import {Card} from '@material-ui/core'

const Transaction = (props) => {

    return (
    <Card>
        <div>Payee Id: {props.transaction.payeeID} </div>
        <div>Date: {props.transaction.date}</div>
        <div>amount: {props.transaction.amount}</div>
        <div>Type: {(props.transaction.payeeID === props.transaction.custID) ? "Debit":"Credit"}</div>
    </Card>)
}

export default Transaction;