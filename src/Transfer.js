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