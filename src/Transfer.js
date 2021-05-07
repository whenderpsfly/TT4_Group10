import React, { useRef, useState } from 'react'
// import Checkbox from '@material-ui/core/Checkbox'

export default function Transfer() {
    const transferIDNameRef = useRef()
    const transferAmtNameRef = useRef()
    const transferMsgNameRef = useRef()
    var [egift, seteGift] = useState(false)
    // placeholder egift
    // var egift = false

    function transferButton(e){
        const payeeID = transferIDNameRef.current.value
        const amount = transferAmtNameRef.current.value
        const msg = transferMsgNameRef.current.value
        console.log("payeeID: " + payeeID)
        console.log("amount: " + amount)
        console.log("message: " + msg)
        console.log("egift: " + egift)
        transferAmtNameRef.current.value = 0

        // Call API here to Add Transaction using
        // {"custID":custID, (from login)
        //      "accountKey":___,
        //      "payeeID":payeeID,
        //      "amount":amount,
        //      "eGift":egift,
        //      "message":msg}
        async function sendAPI(){
            const res = await fetch ('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', 
                {
                    'method': 'POST',
                    'headers': {
                        'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
                    },
                    'body': JSON.stringify({
                        custID: 10, // hardcode for now, to be integrated
                        accountKey: "ubrvt7g7-tb80-jtjv-d49e-yrwbyi5tuki", // hardcode for now, to be integrated
                        payeeID:payeeID,
                        amount:amount,
                        eGift:egift,
                        message:msg
                    })
                })
            console.log(res)
            }
        sendAPI()

    }


    function toggleeGift(){
        egift = seteGift(!egift)
        
    }

    return (
        <>
            <div>Transfer to:</div>
            <input ref={transferIDNameRef} type="number" />
            <div>Amount:</div>
            <input ref={transferAmtNameRef} type="number" />
            <div>Message (Optional): </div>
            <input ref={transferMsgNameRef} type="text" />
            <div> 
                eGift? 
                    <input 
                        type="checkbox" 
                        checked={egift}
                        onChange={toggleeGift}
                        style = {{display : 'inline-block'}} 
                    />
            </div>

            <button onClick={transferButton}>Transfer</button>
        </>
    )
}
