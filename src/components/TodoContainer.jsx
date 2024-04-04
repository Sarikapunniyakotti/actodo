import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"

function TodoContainer() {

    const [activityArray,setactivityArray]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Take a shower"
        },
        {
            id:3,
            activity:"Have Breakfast"
        }
    ])

    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArray={activityArray} setactivityArray={setactivityArray}/>
                <TodoList activityArray={activityArray} setactivityArray={setactivityArray} />
            </div>
        </>
    )
}
export default TodoContainer