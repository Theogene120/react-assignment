

function Hobbies({hobby}){
    return <li>{hobby}</li>
}

export default function HoppyList() {
    
    const hobbies = ["Reading", "Coding", "Music", "Traveling"];
    return (
        <div className="ml-10 mt-5">
            <p className="text-purple-700 font-bold">My hobbies:</p>
            <ul className="list-disc pl-6">
                {hobbies.map((hobby, index) => (
                    <Hobbies key={index} hobby={hobby} />
                    ))}
            </ul>
        </div>
    )
}