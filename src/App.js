import { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import { Admin } from './components/Admin';
import { AllProducts } from './components/AllProducts';
import { Box } from './components/Box';
import { Header } from './components/Header';
import { getDataProduct } from './components/logika/ActionCreator';
import { Login } from './components/Login';
import { User } from './components/User';

function btn(state, action) {
  switch (action.type) {
    case 'admin': return { admin: true, login: false, pokaz: true }
    case 'product': return { product: true, btn: (true && state.btn) || false, pokaz: true }
    case 'login': return { login: true, pokaz: true }
    case 'box': return { box: true, btn: true, pokaz: true }
    case 'img': return { user: true, btn: true, pokaz: true }
    case 'user': return { btn: true, box: true, pokaz: true }
    case 'filter': return { filter: true, product: true, btn: (true && state.btn) || false, pokaz: true }
    case 'reg': return{login: action.value, product: false, pokaz: true }
    default: return state
  }
}

function App() {
  let dispatch = useDispatch()

  let [boxData, setBoxData] = useState([])

  function getBoxData(data) {
    setBoxData((p) => [...p, data])
  }
  
  let [id, setId] = useState([])
  function takeId(i) {
    setId(i)
  }

  let [all, setAll] = useReducer(btn, {
    admin: false,
    product: false,
    login: false,
    box: false,
    user: false,
    btn: false,
    pokaz: false,
    filter: false,
  })
  
  function click(type) {
    setAll({ type: type })
  }
  function pokaz(type, value){
    setAll({type: type, value: value})
  }

  let [user1, setuser1] = useState({})

  function user(data) {
    setuser1(data)
  }
  
  useEffect(()=>dispatch(getDataProduct(boxData)),[])

  return (
    <div className="app">
      <Header func={click} name={user1.name} btn={all.btn} />
      {all.admin && <Admin func={click} />}
      {all.product && <AllProducts data={getBoxData} id={takeId} show={pokaz}/>}
      {all.pokaz || <AllProducts data={getBoxData} id={takeId} show={pokaz}/>}
      {all.user && <User />}
      {all.login && <Login func={click} data={user} />}
      {all.box && <Box id={id} user={user1}/>}
    </div>
  );
}

export default App;
