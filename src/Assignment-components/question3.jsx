

export default function Button({text, color}){

    return(
        <div className="">
            <button className="ml-10 border-2 border-purple-900 p-2 mt-5 rounded-md" style={{color : color}}>{text}</button>
        </div>
    )
}