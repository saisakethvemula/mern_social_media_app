import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const Login = () =>{
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const emailregex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    const postData = () =>{

        if(!emailregex.test(email)){
            M.toast({html: "invalid email pattern", classes:"#d32f2f red darken-2"})
            return
        }
        fetch("/signin",{
            method: "post",
            headers: {
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                password:password,
                email:email
            })
        }).then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error, classes:"#d32f2f red darken-2"})
            }
            else{
                M.toast({html: "Succesfully signed in", classes:"#1de9b6 teal accent-3"})
                navigate("/")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">Instagram</h2>
                <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={()=>postData()}>
                    Login
                </button>
                <h6><Link to="/signup">Don't have an account?</Link></h6>
            </div>
        </div>
    )
}

export default Login