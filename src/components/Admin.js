import { useReducer } from "react"
import { useDispatch } from "react-redux"
import { dataNewProductPost } from "./logika/ActionCreator"
import { Product } from "./Product"
import './AllStyle.css'

function newData(prevData, newData){
    switch(newData.type){
        case 'url': return{...prevData, url: newData.value, provurl: newData.value.trim()!==''}
        case 'text': return{...prevData, text: newData.value, provtext: newData.value.trim()!==''}
        case 'about': return{...prevData, about: newData.value, provabout: newData.value.trim()!==''}
        case 'price': return{...prevData, price: newData.value, proveprice: newData.value.trim()!==''}
        case 'add': return{...prevData, allData: [...prevData.allData, {url: prevData.url, text: prevData.text, about: prevData.about, price: prevData.price}]}
        case 'clear': return{...prevData, url: '' , text: '', about: '' , price: '' ,}
        default: return prevData;
    }
}

export const Admin=(props)=>{

let[data, setData]=useReducer(newData, {
    url: '',
    text: '',
    about: '',
    price: '',
    provurl: false,
    provtext: false,
    provabout: false,
    proveprice: false,
    id: Math.random().toString(),
    allData: [],
})

let dispatch=useDispatch()

function getData(type, e){
    setData({type: type, value: e.target.value})
}
let btn = true
if(data.provurl && data.provtext && data.provabout && data.proveprice){
    btn = false
}

function submit(e){
    e.preventDefault()
    props.func('creat')
    setData({type: 'add'})
    dispatch(dataNewProductPost({url: data.url, text: data.text, about: data.about, price: data.price, id: data.id++}))
    setData({type: 'clear'})
    
}
    return(
    <div>
        <form onSubmit={submit}>
            <div className='inp inp3'>
                <label htmlFor='picture'>URL картинки</label>
                <input type='text' onChange={(e)=>getData('url', e)} value={data.url}/>
            </div>
            <div className='inp inp3'>
                <label htmlFor='text'>Название</label>
                <input type='text' onChange={(e)=>getData('text', e)} value={data.text}/>
            </div>
            <div className='inp inp3'>
                <label htmlFor='about'>Описание</label>
                <input type='text' onChange={(e)=>getData('about', e)} value={data.about}/>
            </div>
            <div className='inp inp3'>
                <label htmlFor='about'>Цена</label>
                <input type='number' onChange={(e)=>getData('price', e)} value={data.price}/>
            </div>
            <button disabled={btn}>Add</button>
        </form>
        <Product newProduct={data.allData}/>
    </div>
    )
}