function CurrentDate(){
    let date = new Date().toDateString()
    return(
        <>
            <p className="text-center font-semibold text-lg mt-5">To day date: {date}</p>

        </>
    )
}

export default CurrentDate