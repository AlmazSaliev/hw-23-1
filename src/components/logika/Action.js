
export const Add=({name, email, password})=>({
    type: 'ADD',
    name: name,
    email: email,
    password: password
})
export const boxRender=(value)=>({
    type: 'box',
    value: value,
})