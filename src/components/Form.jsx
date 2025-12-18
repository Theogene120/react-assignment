export default function Form(){

    return(
        <form className="mt-10 border border-black mx-10 p-5">
            <p className="my-3">
                User Name :
                <input type="text" name="name" placeholder="Enter your name here" className="mx-4 border border-black" />
            </p>
            <p className="my-3">
                Enter Password :
                <input type="password" name="password" className="mx-4 border border-black" />
            </p>

            <button className="my-3 p-1 border border-black">Submit</button>
        </form>
    )
}