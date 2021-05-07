import React, { useState, useRef } from 'react'

export default function Transfer() {
    const transferIDNameRef = useRef()
    const transferAmtNameRef = useRef()
    const transferMsgNameRef = useRef()
    // const [egift, setChecked] = React.useState(true)
    var egift = false

    function transferButton(e){
        const payeeID = transferIDNameRef.current.value
        const amount = transferAmtNameRef.current.value

        console.log("payeeID: " + payeeID)
        console.log("amount:" + amount)

        transferAmtNameRef.current.value = 0
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
                <input type="checkbox" checked={egift} style = {{display : 'inline-block'}}/>
            </div>

            <button onClick={transferButton}>Transfer</button>

        </>
        
    )
}
