import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{

    const navigate=useNavigate()
    const [eUsername,setEusername]=useState()
    const [ePassword,setEpassword]= useState()
    const [ruser,setRuser]=useState(true)
    
    const users=props.users

    function handleUInput(e)
    {
        setEusername(e.target.value)
    }

    function handleUPword(e)
    {
        setEpassword(e.target.value)
    }

    function checkUser()
    {

        var userfound =false
        console.log(users)
        users.forEach(function(item)
        
        {
            if(item.username===eUsername && item.password===ePassword)
            {
                console.log("success")
                userfound = true
                navigate("/landing",{state:{user:eUsername}})
            }
            
        })

        if(userfound===false)
        {
            console.log("Login failed!")
            setRuser(false)
        }
    }

    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {
                ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please Sign Up before you Login</p>
            }
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

                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
                    Login
                </button>

                <p>Don't have an account? <Link to={"/Signup"} className="underline">Sign Up</Link></p>

            </div>

        </div>

    </div>
    )
}
export default Login