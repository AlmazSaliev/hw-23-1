
export function loadingProduct(value){
    return{
        type: 'NEW',
        value: value
    }
}
export function getNewProduct(value){
    return{
        type: 'newproduct',
        value: value,
    }
}
export function getDataProduct(id){
    return async (dispatch)=>{
        const res = await fetch('https://almaz-sali-default-rtdb.firebaseio.com/data.json')
        const getres=  await res.json()
        let arr=[]
        let newarr=arr.find((i,k)=>i.id!==id[k].id)
        if(!newarr){
           for(let key in getres){
            arr.push(getres[key])
        } 
        }else{
            return arr
        }
        dispatch(getNewProduct(arr))
    }
}
export function dataNewProductPost(product){
    return async (dispatch)=>{
        const res = await fetch ('https://almaz-sali-default-rtdb.firebaseio.com/data.json',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        )
        const data = await res.json()
        dispatch(loadingProduct(data))
    }
}

export const userBox=(value)=>{
    return{
        type: 'userBox',
        value: value,
    }
}
export const postUserBox=(boxproducts)=>{
    return async (dispatch)=>{
        const res = await fetch('https://boxdata-c36e5-default-rtdb.firebaseio.com/userbox.json',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(boxproducts)
        })
        const data = await res.json()
        dispatch(userBox(data))
    }
}