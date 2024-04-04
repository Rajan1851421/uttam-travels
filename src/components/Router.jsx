import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contactus from "./pages/Contactus"
import Service from "./pages/Service"
import Login from "./login/Login"



function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element ={<Contactus/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
      
    </>
  )
}

export default Router
