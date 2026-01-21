import { Link } from "react-router-dom";
import Navbar from "./navbar";


export default function Gasabo() {

    return(
        <>
        <Navbar />
        <div>
            <p className="text-purple-700 font-extrabold text-3xl my-5 text-center mt-20">This is page contain information about my district</p>
            <p className="flex justify-center items-center"><button>Learn more</button></p>
        </div>
        </>
        
        
    )
}