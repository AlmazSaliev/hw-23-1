
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boxRender } from "./logika/Action";
import './Product.css'

function getvalue(state, action){
    if (action.type === 'add') {
        let bool = state.findIndex((elem)=>{
            return elem.id === action.value.id;
        })
        if(bool === -1){
            return [...state, action.value];
        } else {  
            return state.map((elem,index)=>{
                if(index === bool){
                    return {
                        ...elem,
                        price: +elem.price + +action.value.price
                           }
                } else {
                    return elem;
                }
            })
        }
     }
}
export const Product = (props) => {
    let dispatch=useDispatch()
    let [state, setstate]=useReducer(getvalue, [])
    useEffect(()=>dispatch(boxRender(state)), [state])
    let user=useSelector(user=>user.user)
    let b=false
    function provuser(){
    if (Object.keys(user).length == 0) {
        b=true
        props.show('reg', b)
      } 
    }
    if (props.product && props.id && props.show) {
       console.log(state);
        return (
            <div className="allproduct-product">
                {props.product.map((i) => <div key={i.id} className='product'>
                    <img src={i.url} alt={i.text} />
                    <h3>{i.text}</h3>
                    <p>{i.about}</p>
                    <span>{i.price}</span>
                    <button onClick={() => { provuser();  props.data(i); props.id(state); setstate({type: 'add', value: i})}}>Купить</button>
                </div>)}
            </div>
        )
    }
    if (props.newProduct) {
        console.log(props.newProduct);
        return (
            <div className="admin-render">
                {props.newProduct.map((i) => <div key={i.id} className='product'>
                    <img src={i.url} alt={i.text} />
                    <h2>{i.text}</h2>
                    <p>{i.about}</p>
                    <span>{i.price}</span>
                    <button>Купить</button>
                </div>)}
            </div>
        )
    }
    if(props.data){
        return(
            <div className="product-box">
                {props.data.map((i)=>(
                    <div key={i.id} className='product inbox'>
                        <img src={i.url} alt={i.text} />
                        <h2>{i.text}</h2>
                        <p>{i.about}</p>
                        <span>{i.price}</span>
                    </div>
                ))}
            </div>
            
        )
    }
}