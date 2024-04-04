import { useState } from "react"

function AddTodoForm(props) {

    const activityArray=props.activityArray
    const setactivityArray=props.setactivityArray

    const [newActivity,setnewActivity]=useState("")

    function handlechange(e)
    {
        setnewActivity(e.target.value)
    }

    function addactivity()
    {
        setactivityArray([...activityArray,{id:activityArray.length+1,activity:newActivity}])
        setnewActivity("")
    }
    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input value={newActivity} onChange={handlechange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                    <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
                </div>
            </div>
        </>
    )
}
export default AddTodoForm