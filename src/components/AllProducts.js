import { useSelector } from "react-redux"
import { Product } from "./Product"
import './AllStyle.css'

export const AllProducts=(props)=>{
    let store = useSelector(store=>store.product)
    console.log(store.newproduct);
    return(
        <div className="allproduct">
            <Product product={store.newproduct} show={props.show} data={props.data} id={props.id} />
        </div>
    )
}