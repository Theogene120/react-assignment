

export default function TodayDate(){
    let date = new Date().toDateString()

    return(
        <div>
            <p className="my-5 text-xl font-bold underline">Question 2</p>
            <div className="ml-10">
            To day is : <span className="font-bold">{date}</span>
        </div>
        </div>
        
    )
}