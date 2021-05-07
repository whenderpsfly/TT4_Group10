import React, {useState} from 'react';
import Transaction from './transaction';

const data = [{
    custID: 1,
    payeeID: 2,
    date: Date.now(),
    amount: 500000,
    eGift: false,
    message: "message"
}]

const TransactionHistory = () => {

    const [transaction, setTrans] = useState([]);

    const getTransHist = async () => {
        try {
            //actual api call, to uncomment once data flow is finalised
            /* const res = await fetch ('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', 
            {
                'headers': {
                    'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
                },
                'body': {
                    'custID': "custID",
                    'accountKey': "accountKey"
                }
            })
            const transactions = await res.json()
            setTrans(transactions) */ 
            console.log("data", data)
            setTrans(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <React.Fragment>
            <button onClick={getTransHist}>View Transaction History</button>
            <div>
                {transaction.map((item) =>
                    <Transaction transaction={item} key={data.indexOf(item)}/>
                )}
            </div>
        </React.Fragment>
    )
}

export default TransactionHistory;