import { useState } from "react"
import { useDispatch } from "react-redux"
import { Add } from "./logika/Action"
import './AllStyle.css'

export const Login=(props)=>{

let[user1, setuser1]=useState({
    name: '', 
    email: '',
    password: '',
    provname: false,
    provemail: false,
    provpassword: false,
})

let dispatch=useDispatch()

    
function newInfo(e){
    let value=e.target.value
    if(e.target.name==='name'){
        setuser1({
            ...user1,
            provname: user1.provname = value.trim()!==''
        })
    }
     if(e.target.name==='email'){
        setuser1({
            ...user1,
            provemail: user1.provemail = value.trim()!==''
        })
    }
     if(e.target.name==='password'){
        setuser1({
            ...user1,
            provpassword: user1.provpassword = value.length > 6
        })
    }
    setuser1({
            ...user1,
            [e.target.name]: value,
            })  
    }
  
    let btn=true
    if(user1.provname && user1.provemail && user1.provpassword){
        btn=false
    }

function submit(e){
    e.preventDefault()
    props.data(user1)
    dispatch(Add(user1))
    
    if(user1.name==='admin'){
        props.func('admin')
    }
    if(user1.name!=='admin'){
        props.func('user')
    }
    setuser1({
        name: '', 
        email: '',
        password: '',
    })
}
    return(
        <form onSubmit={submit}>
            <h2>Resitration</h2>
            <div className='inp inp3'>
                <label htmlFor='name'>Name</label>
                <input type='text' name="name" onChange={(e)=>newInfo(e)} value={user1.name}/>
            </div>
            <div className='inp inp3'>
                <label htmlFor='email'>Email</label>
                <input type='email' name="email" onChange={(e)=>newInfo(e)} value={user1.email}/>
            </div>
            <div className='inp inp3'>
                <label htmlFor='Password'>Password</label>
                <input type='password' name="password" onChange={(e)=>newInfo(e)} value={user1.password}/>
            </div>
            <button disabled={btn}>Login</button>
        </form>
    )
}