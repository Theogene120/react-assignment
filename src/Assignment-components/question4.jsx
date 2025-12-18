

export default function Card({name, age, email}) {

    return(
        <div className="flex ml-10 mt-5">
            <div className="border border-black p-6 text-center">
                <p className="text-purple-700 text-xl my-5 font-bold">My Profile</p>
                <p>My name is : <span className="font-bold">{name}</span></p>
                <p>I'm <span className="font-bold">{age}</span> years old</p>
                <p>My Emain is : <span className="font-bold">{email}</span></p>
            </div>
        </div>
    )
}