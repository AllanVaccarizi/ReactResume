import React from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import { useState } from "react"

//Honestly i just followed this tutorial https://www.youtube.com/watch?v=uSxj3Rnu-Nk

const Snackbar = forwardRef((props,ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false)

    useImperativeHandle(ref, () => ({
        show(){
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 3000)
        }
    }))

    return (
        <>
            <div className="snackbar" 
            id={showSnackbar ? "show" : "hide"}
            style={{backgroundColor: props.type === "success" ? "#00F593" : "#FF0033"}}>
                <div className="symbol">
                    {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
                </div>
                <div className="message">
                    {props.message}
                </div>
            </div>
        </>
    )
})

export default Snackbar