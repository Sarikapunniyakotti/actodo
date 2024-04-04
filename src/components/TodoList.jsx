import TodoItem from "./TodoItem"

function TodoList(props) 
{
    const activityArray=props.activityArray
    const setactivityArray=props.setactivityArray

    return (
        <>
            <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {
                    activityArray.length===0?<p>You haven't added any activity yet!</p>:""
                }
                {
                    activityArray.map(function(item,index)
                    {
                        return <TodoItem id={item.id} activity={item.activity} index={index} activityArray={activityArray} setactivityArray={setactivityArray}/>
                    })
                }
            </div>
        </>
    )
}
export default TodoList