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

    const getTransHist = () => {
        try {
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