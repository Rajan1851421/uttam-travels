import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearTokenLogin } from '../features/producrSlice';
import { RiHome4Fill } from "react-icons/ri";
import { FcServices } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlinePersonSearch } from "react-icons/md";



function Navbar() {
  const dispatch = useDispatch()
  const { Token_login } = useSelector((state) => state.productStore)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(clearTokenLogin())
    setIsOpen(false);
  }
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 py-2 sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to='/' className='flex justify-start'>  <img className='h-[70px] w-[70px] rounded-full' src="https://images.unsplash.com/photo-1715346848307-84385a7f3a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu items */}
        <div className="hidden md:block">
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center "><RiHome4Fill className='mx-1 text-[#84CC16]' />Home</Link>
            <Link to="/service" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center"> <FcServices className='mx-1' /> Services</Link>
            <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center "><IoIosCall className='mx-1' /> Contact</Link>
            <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center "><FcAbout className='mx-1' /> About Us</Link>
            <Link to="/testimonials" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center "><MdOutlinePersonSearch className='mx-1' />Testimonials</Link>
            {
              Token_login ?
                (
                  <Link to="/vechile" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center "><FaCar className='mx-1' /> Add Vehicle</Link>

                ) :
                null
            }

            {
              Token_login ?
                (<button onClick={handleLogout} className='bg-[#B91C1C] px-2 rounded-md text-white flex justify-center items-center '> <TbLogout className='mx-1 text-[#DCFCE7]' /> Logout</button>) :
                <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2
                  border rounded-md flex justify-center items-center "><FaRegUserCircle className='mx-1' /> Login</Link>
            }


          </div>
        </div>
      </div>
    </div>

      {/* Mobile menu */ }
  {
    isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" onClick={closeMenu} className="text-white  px-3 py-2 rounded-md flex justify-center items-center "><RiHome4Fill className='mx-1 text-[#84CC16]' />Home</Link>
          <Link to="/service" onClick={closeMenu} className="text-white  px-3 py-2 rounded-md flex justify-center items-center "><FcServices className='mx-1' /> Services</Link>
          <Link to="/contact" onClick={closeMenu} className="text-white  px-3 py-2 rounded-md flex justify-center items-center "><IoIosCall className='mx-1' /> Contact</Link>
          <Link to="/about" onClick={closeMenu} className="text-white  px-3 py-2 rounded-md flex justify-center items-center "><FcAbout className='mx-1' /> About Us</Link>
          <Link to="/testimonials" onClick={closeMenu} className="text-white  px-3 py-2 rounded-md flex justify-center items-center "><MdOutlinePersonSearch className='mx-1' />Testimonials</Link>

          {
            Token_login ?
              (
                <Link to="/vechile" onClick={closeMenu} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex justify-center items-center "><FaCar className='mx-1' /> Add Vehicle</Link>

              ) :
              null
          }
          {
            Token_login ?
              (<button onClick={handleLogout} className='bg-[#B91C1C] px-2 rounded-md text-white flex justify-center items-center '> <TbLogout className='mx-1 text-[#DCFCE7]' /> Logout</button>)
              :
              (<Link to="/login" onClick={closeMenu} className="text-white hover:bg-gray-700 px-3 py-2
                  border rounded-md flex justify-center items-center "><FaRegUserCircle className='mx-1' /> Login</Link>)
          }
        </div>
      </div>
    )
  }
    </nav >
  );
}

export default Navbar;
