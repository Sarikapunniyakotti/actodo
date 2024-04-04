function TodoItem(props)
{
    const activityArray=props.activityArray
    const setactivityArray=props.setactivityArray

    function handleDelete(deleteId)
    {
        var tempArray=activityArray.filter(function(item){
            if(deleteId===item.id)
            {
                return false
            }
            else
            {
                return true
            }
        })
       setactivityArray(tempArray)
    }

    return(
        <div className="flex justify-between">
            <p>{props.index+1}.{props.activity}</p>
            <button className=" text-red-400" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
        
    )
}
export default TodoItem