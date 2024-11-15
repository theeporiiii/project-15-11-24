import './App.css'
import Signin from './components/Signin'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Hom from './components/Hom'
import AddComputer from './components/AddComputer'
import AdminSign from './components/AdminSign'




function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adminsign' element={<AdminSign/>}/>
      <Route path='/in' element={<Signin/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/hom' element={<Hom/>}/>
      <Route path='/Add' element={<AddComputer/>}/>
      

  

    </Routes>
  )
}

export default App
