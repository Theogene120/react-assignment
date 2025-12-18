

export default function TodayDate(){
    let date = new Date().toDateString()

    return(
        <div className="ml-10">
            To day is : <span className="font-bold">{date}</span>
        </div>
    )
}