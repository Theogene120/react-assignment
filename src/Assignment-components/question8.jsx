import { useState } from "react";

export default function Hover() {

    let [hover, setHover] = useState(false)

    return(

        <div

        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
            height : '200px',
            width : '200px',
            backgroundColor : hover ? 'lightblue' : 'white'
        }}
        className="m-10 flex justify-center items-center border border-purple-600"
        > Hover over me</div>
    )
}