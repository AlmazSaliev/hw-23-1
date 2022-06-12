import { Product } from "./Product";
import { useDispatch } from "react-redux";
import { postUserBox } from "./logika/ActionCreator";
import { useSelector } from "react-redux";
import './AllStyle.css'
import { useState } from "react";

export const Box = (props) => {

    let dispatch = useDispatch()

    let store=useSelector(store=>store.boxrender)
console.log(store);
    let data=store.reduce((current, i)=>{
        return current + +i.price
    }, 0)
   let[show, setshow]=useState(false)
    function send(){
        setTimeout(()=>setshow(true),2000)
        dispatch(postUserBox({
            user: {username: props.user.name, email: props.user.email, password: props.user.password},
            box: [...store],
            totalprice: data,
        }))
    }
    return (
        <div>
            <Product data={store}/>
            <div className="box-render">
                <span>Общая цена: {data} сом</span>
                <button onClick={send}>Купить</button>
                {show && <p>Покупка успешна сделана</p>}
            </div>
        </div>
    )
}

