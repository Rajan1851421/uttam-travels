import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contactus from "./pages/Contactus"
import Service from "./pages/Service"
import Login from "./login/Login"
import AddVehicleForm from './pages/AddVehicleForm'



function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element ={<Contactus/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/vechile' element={<AddVehicleForm/> }/>
    </Routes>
      
    </>
  )
}

export default Router
