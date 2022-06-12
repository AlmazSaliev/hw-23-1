import { combineReducers } from "redux"

let prevUser = {
    name: 'Almaz',
    email: 'almaz',
    password: '123',
}

let prevProduct = {
    newproduct: [{
        url: 'https://www.myphone.kg/files/media/15/15173.webp',
        text: 'Xiaomi 12 Pro 12+256Gb',
        about: 'Овладейте каждой сценой Развиваясь благодаря нашему постоянному стремлению к совершенству в создании того, о чем вы мечтаете, Xiaomi 12 Pro теперь готов справиться с любой сценой благодаря тройной 50-мегапиксельной камере профессионального уровня, динамическому дисплею WQHD+ с частотой 120 Гц и самому передовому чипсету Snapdragon® 8 Gen 1. и интеллектуальная 120-ваттная зарядка Xiaomi HyperCharge.',
        price: '73390',
        id: Math.random().toString()
    }]
}


export const addalldata = (state = prevProduct, action) => {
    switch (action.type) {
        case 'NEW':
            return {
                ...state,
                newproduct: [...state.newproduct, { url: action.url, text: action.text, about: action.about, price: action.price, id: Math.random().toString() }]
            }
            case 'newproduct':
                return{
                    ...state,
                    newproduct: [...state.newproduct, ...action.value]
                }
        default:
            return state
    }
}

let pushId = 0
export const adduser = (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                name: action.name,
                email: action.email,
                password: action.password,
                id: pushId++
            }
        
        default:
            return state;
    }
}

export const addnewuserproduct=(state=prevProduct, action)=>{
    if(action.type==='userBox'){
        return {
            // user: {username: action.value.user.username, eamil: action.value.user.email, password: action.value.user.password},
            box: [...action.value.box],
            totalprice: action.value.totalprice,
        }
    }
    return state
}

export const renderBox=(state=[], action)=>{
    if(action.type==='box'){
        if(action.value.length === 0){
            return state
        }
           return [
            ...action.value,
        ] 
        
        
    }
    return state
}

export let allreducer = combineReducers({
    product: addalldata,
    user: adduser,
    box: addnewuserproduct,
    boxrender: renderBox,
})
