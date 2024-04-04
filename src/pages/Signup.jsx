import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)
 {

    const users=props.users
    const setusers=props.setusers

    const navigate = useNavigate()
    const [eUsername,setEusername]=useState()
    const [ePassword,setEpassword]= useState()

    function handleUInput(e)
    {
        setEusername(e.target.value)
    }

    function handleUPword(e)
    {
        setEpassword(e.target.value)
    }
    function addUsers()
    {
        setusers([...users,{username:eUsername,password:ePassword}])
        navigate("/")
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up here :)</p>
                <div className="flex flex-col my-2 gap-2">
                    <input
                        type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md"
                        placeholder="Username"
                        onChange={handleUInput}>
                    </input>

                    <input
                        type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md"
                        placeholder="Password"
                        onChange={handleUPword}>
                    </input>

                    <input
                        type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md"
                        placeholder="Confrim Password">
                    </input>

                    <button onClick={addUsers} className="bg-[#FCA201] w-24 p-1 rounded-md">
                        Sign Up
                    </button>

                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>

                </div>

            </div>

        </div>
    )
}

export default Signup