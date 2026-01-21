
import React from "react"
import ReactDOM from 'react-dom/client'

function Buttonnn({text}){
    return <button>{text}</button>
}

function App() {
    return(
        <>
            <Buttonnn text='BACK' />
            <Buttonnn text= 'SUBMIT' />
            <Buttonnn text= 'CANCEL' />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
