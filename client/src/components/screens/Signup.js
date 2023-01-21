import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const SignUp = () =>{

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const postData = () =>{
        if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)){
            M.toast({html: "invalid email pattern", classes:"#d32f2f red darken-2"})
            return
        }
        fetch("/signup",{
            method: "post",
            headers: {
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email
            })
        }).then(res => res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes:"#d32f2f red darken-2"})
            }
            else{
                M.toast({html: data.message, classes:"#1de9b6 teal accent-3"})
                navigate("/login")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">Instagram</h2>
                <input type="text" placeholder="email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="name" value={name} onChange = {(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="password" value={password} onChange = {(e)=>setPassword(e.target.value)}/>
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={()=>postData()}>
                    SignUp
                </button>
                <h6><Link to="/login">Already have an account?</Link></h6>
            </div>
        </div>
    )
}

export default SignUp