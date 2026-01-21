import { Link } from "react-router-dom"

export default function Navbar() {

    return(
        <div className="border border-black mt-20  pb-10">
            <p className="mb-10">Routing -------- Here are the pages</p>
            <p className="my-5 text-xl font-bold underline">Question 16/17</p>
            <p className=" flex gap-10 text-lg font-semibold text-purple-700 justify-center items-center">
            <Link className="hover:underline" to="/">Home</Link> |{" "}
            <Link className="hover:underline" to="/about">About</Link> |{" "}
            <Link className="hover:underline" to='/contact'>Contact</Link> |{" "}
            <Link className="hover:underline" to='/gasabo'>Gasabo</Link>
            </p>
      </div>
    )
}