

export default function Button({text, color}){

    return(
        <div className="ml-10">
            <button className="border-2 border-purple-900 p-2 mt-5 rounded-md" style={{color : color}}>{text}</button>
        </div>
    )
}