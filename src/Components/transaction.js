import React, {useState, useEffect} from 'react'

const Transaction = (props) => {
    //const [tran, setTran] = useState({})
    useEffect(() => {
        console.log("props", props.transaction)
        //setTran(trans)
    }, [props])
    return (
    <React.Fragment>
        <div>Payee Id: {props.transaction.payeeID} Date: {props.transaction.date} amount: {props.transaction.amount}</div>
    </React.Fragment>)
}

export default Transaction;