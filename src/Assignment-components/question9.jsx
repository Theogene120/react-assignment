import { useState } from "react";

export default function Submetted() {

    let [formData, setFormData] = useState({name: '', email: ''})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value}) // leave others and change only the one you're on
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="border border-gray-400 m-10 p-5 flex gap-5">

            <input  placeholder="Name" name="name" value={formData.name} onChange={handleChange} className="border border-black" />
            <input  placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="border border-black" />

            <button type="submit" className="border-2 border-black p-2 bg-purple-500">Submit</button>
        </form>
    )
}