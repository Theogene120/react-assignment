
export default function ItemList(){

    let mylist = ['Item1', 'Item2','Item3','Item4','Item5','Item6',]

    return (
        <div className="m-10">
            <p className="text-purple-700 text-lg my-2 font-bold">Here is list of Items:</p>
            {mylist.map(item => (
                <p>{item}</p>
                ))}
        </div>
    )
}