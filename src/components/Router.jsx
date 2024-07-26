import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contactus from "./pages/Contactus"
import Service from "./pages/Service"
import Login from "./login/Login"
import AddVehicleForm from './pages/AddVehicleForm'
import About from "./pages/About"
import Testimonials from "./pages/Testimonials"
import SignupForm from "./login/SignupFrom"
import ViewVehicle from "./pages/ViewVehicle"
import Manage from "../admin/Admin_manage"
import ChangePassword from "./login/ChangePassword"




function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element ={<Contactus/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/vechile' element={<AddVehicleForm/> }/>
        <Route path="/about" element={<About/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/view' element={<ViewVehicle/>}/>
        <Route path = '/manage_admin' element={<Manage/>}/>
        <Route path = '/change_password' element = {<ChangePassword/>}/>
    </Routes>
      
    </>
  )
}

export default Router
