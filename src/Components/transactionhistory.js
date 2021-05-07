import React, {useState} from 'react';
import Transaction from './transaction';
import {Card} from '@material-ui/core'


const data = [{
    custID: 1,
    payeeID: 2,
    date: Date.now(),
    amount: 500000,
    eGift: false,
    message: "message"
}]

const user = {custID: 1, accountKey: "ubrvt7g7-tb80-jtjv-d49e-yrwbyi5tuki"}

const TransactionHistory = () => {

    const [transaction, setTrans] = useState([]);

    const getTransHist = async () => {
        try {
            const res = await fetch ('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', 
            {
                method: 'POST',
                headers: {
                    'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
                },
                body: JSON.stringify(user)
            })
            const transactions = await res.json()
            if (transactions) {
                setTrans(transactions)
            } else {
                setTrans(data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Card>
            <button onClick={getTransHist}>View Transaction History</button>
            <div>
                {transaction.map((item) =>
                    <Transaction transaction={item} key={transaction.indexOf(item)}/>
                )}
            </div>
        </Card>
    )
}

export default TransactionHistory;