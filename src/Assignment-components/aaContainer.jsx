import Welcome from "./aaExamPreps1"
import CurrentDate from "./aaExamPreps2"
function Cccontainer(){
    return(
        <>
            <Welcome />
            <CurrentDate />
        </>
        
    )
}
export default Cccontainer

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)