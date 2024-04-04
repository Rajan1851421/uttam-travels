import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contactus from "./pages/Contactus"
import Service from "./pages/Service"



function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element ={<Contactus/>}/>
        <Route path="/service" element={<Service/>}/>
    </Routes>
      
    </>
  )
}

export default Router
