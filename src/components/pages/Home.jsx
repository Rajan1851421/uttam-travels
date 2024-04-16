
import { Link } from 'react-router-dom'
import '/src/App.css'
import Card from './Crad'
import { FaStar } from "react-icons/fa6";
import { FaShuttleVan } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";



function Home() {
    return (
        <>
            <div className="mx-14">
                <h1 className="text-center text-lg md:text-4xl mt-2 md:mt-6  font-extrabold bungee-spice-regular">welcome  </h1>
                <p className='text-center font-bold mx-4 md:mx-48 dancing-script text-lg md:text-4xl my-4 '>
                    Thank you for choosing  <Link to='' className='text-[#1E40AF]'>Uttam Travels</Link> How can I assist you today? Whether you need help with booking, travel arrangements, or have any questions about your journey, feel free to ask. Your comfort and satisfaction are our top priorities.
                </p>

            </div>

            <h1 className="text-center text-lg md:text-4xl mt-5 md:mt-6 font-extrabold bungee-spice-regular">Top Vehicle</h1>

            <div className=' mr-0 md:mr-14 flex '>
                <Card />
            </div>





            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-1 md:mx-10 p-4'>
                <div className="relative flex  justify-center overflow-hidden py-6 sm:py-12 w-full">
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-[#FEF08A] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </span>
                            <div
                                className="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p className='capitalize '>Simply message us for booking anywhere anytime. I am always ready For you</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative flex  justify-center overflow-hidden  py-6 sm:py-12 w-full">
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-[#10B981] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <img className='rounded-full' src="https://img.freepik.com/premium-vector/phone-icon-button-thumbnail_24911-30424.jpg?w=740" alt="" />
                            </span>
                            <div
                                className="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p className=' capitalize '>You Can Call us for their number, number is +91-7052002200</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="relative flex  justify-center overflow-hidden  py-6 sm:py-12 w-full">
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-[#A5F3FC] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <img className='rounded-full' src="https://img.freepik.com/free-vector/illustration-speech-bubble_53876-5625.jpg?t=st=1712668639~exp=1712672239~hmac=0a36a2636a19912f5efb2dfa5c02ef6089897e5009b6e891f3c2b7ef94ec3f59&w=740" alt="" />
                            </span>
                            <div
                                className="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p className='capitalize '>You can chat message with the help of whatsapp : +91-7052002200</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative flex  justify-center overflow-hidden  py-6 sm:py-12 w-full">
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-[#FBCFE8] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <img className='rounded-full' src="https://img.freepik.com/free-vector/social-networks-geometric-shape_23-2147543432.jpg?t=st=1712668743~exp=1712672343~hmac=b5899841722cbab777883e776d696fd9ca128baddd6db971bd67a8263b768aa0&w=740" alt="" />
                            </span>
                            <div
                                className="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p className='capitalize '>I am also available in youtube and other social app</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">

                            </div>
                        </div>
                    </div>
                </div>



            </div>


            {/* our stisfied customer */}
            <h1 className='text-[#1E1B4B] font-extrabold text-start ml-10 text-lg md:text-2xl my-2 md:my-10 capitalize'>Book a cab service in viaranasi with <span className='uppercase text-[#06B6D4] '>Uttam travels</span></h1>
            <div className=' grid grid-cols-1 md:grid-cols-4 w-full bg-white mx-auto  gap-y-4 md:gap-y-0 '>
                <div className='flex flex-col justify-center items-center  '>
                    <div className='bg-red-600 p-2 rounded-full h-24 w-24 flex justify-center items-center'>
                        <span className='font-extrabold text-white text-6xl '><TiTickOutline /></span>
                    </div>
                    <div>
                        <p className='mt-4 font-bold uppercase '>Easy Online Booking</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-red-600 p-2 rounded-full h-24 w-24 flex justify-center items-center'>
                        <span className='font-extrabold text-white text-6xl '><FaStar /></span></div>
                    <div>
                        <p className='mt-4 font-bold uppercase '>Professional Drivers</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-red-600 p-2 rounded-full h-24 w-24 flex justify-center items-center'>
                        <span className='text-white font-extrabold text-6xl'><FaShuttleVan /></span>
                    </div>
                    <div>
                        <p className='mt-4 font-bold uppercase '>big fleet of vehicle</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-red-600 p-2 rounded-full h-24 w-24 flex justify-center items-center'>
                        <span className='text-white font-extrabold text-6xl'><GiTakeMyMoney /></span>
                    </div>
                    <div>
                        <p className='mt-4 font-bold uppercase '>online payment</p>
                    </div>
                </div>
            </div>

            <div className='mx-2 md:mx-14 mt-2 md:mt-8 bg-[#E9D5FF] text-[#3730A3] '>
                <p className='text-lg p-2 md:p-6'>
                    At Uttam Travels, we understand that every journey is a story waiting to be written. Whether you are embarking on a solo adventure, a romantic getaway, or a family vacation, we are here to turn your travel dreams into unforgettable experiences.

                </p>
                <h2 className='text-xl font-bold mx-6 capitalize '>We Offer followinf taxi Service in Varanasi </h2>
                <div className='bg-[ #99F6E4] text-gray-700  font-semibold '>
                    <div className='flex flex-col gap-y-6 px-6 py-2 t'>
                        <li >
                            <strong className='mx-2'>Outstation Cab in Varanasi:</strong>
                            <span>We offer local cab service at such affordable and economical rates that you would not want to travel elsewhere without us.</span>
                        </li>
                        <li >
                            <strong className='mx-2 flex-shrink-0'>Local Sightseeing in Varanasi:</strong>
                            It has become a lot easier because we offer cab services with drivers who are extremely courteous, professional, and easy to talk to, making your journey easy breezy. Book with us today to get the best deals on outstation travels.
                        </li>
                        <li>
                            <strong className='mx-1'>One Way Cab:</strong>
                            Every customer
                            is different and every customers needs are valuable to us. Keeping that in mind, we offer one way cab
                            service for you to enjoy sameless journey.
                        </li>
                        <li>
                            <strong className='mx-1'>Round Trip Taxy:</strong>
                            Whether it is a one way or a round trip taxi service you need, we
                            got you covered, at such cost-effective rates with a feel-good experience that you would feel this
                            spiritual city to be a home away from home.
                        </li>
                        <li>
                            <strong className='mx-1'>Car Rental Service:</strong>
                            Strolling around the city is now easier because of
                            our cab rental services which allow you to book a cab on rent. This deal is far more economical than
                            others, and it will not be a wise decision to miss out on it.
                        </li>
                        <li>
                            <strong className='mx-1'>Varanasi Airport Taxi Service:</strong>
                            Airport pickup and drop taxi service has been made
                            convenient with us.
                        </li>
                        <li>
                            <strong className='mx-1'>Railway Station Taxi Service:</strong>
                            We also offer railway station pickup and drop cab
                            service from and to any of your desired location and make your arrival and departure hassle-free and
                            seamless.
                        </li>
                    </div>

                </div>

            </div>

            <div className='mx-1 md:mx-14 mt-4 md:mt-10 relative overflow-x-auto '>
                <h1 className='text-center text-lg md:text-2xl text-[#1E1B4B] font-semibold md:font-extrabold mt-2 md:mt-6 '>
                    Loacal And Outstation taxi Fare
                </h1>
                <div className=" table-responsive w-full">
                    <table className="table-auto min-w-full border-collapse border border-gray-400">
                        <thead className='bg-[#1E40AF] text-white '>
                            <tr className="border border-gray-400">
                                <th rowSpan="2" className="p-2 border border-gray-400 font-bold">
                                    Vehicle Type
                                </th>

                                <th className="p-2 border border-gray-400"><strong>Airport</strong></th>
                                <th colSpan="4" className="p-2 border border-gray-400"><strong>Inside City</strong></th>
                                <th colSpan="2" className="p-2 border border-gray-400"><strong>Outstation</strong></th>
                            </tr>
                            <tr className="border border-gray-400  ">
                                <th className="p-2 border border-gray-400">Pick/Drop</th>
                                <th className="p-2 border border-gray-400">4HR/40KM</th>
                                <th className="p-2 border border-gray-400">6HR/60KM</th>
                                <th className="p-2 border border-gray-400">8HR/80KM</th>
                                <th className="p-2 border border-gray-400">12HR/120KM</th>
                                <th className="p-2 border border-gray-400">Round Trip</th>
                                <th className="p-2 border border-gray-400">One Way</th>
                            </tr>
                        </thead>
                        <tbody className='border border-black'>
                            <tr className='border border-black bg-white '>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Sedan</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.600</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,100 </td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,400</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,850</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,100</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.10</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.15</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center bg-[#E7E5E4] ">
                                <td className="border border-[#D6D3D1] text-center py-2 ">Sedan Plus</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.650</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,500</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,900</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.10.25</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.16</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center ">
                                <td className="border border-[#D6D3D1] text-center py-2 ">Sedan Comfort</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.750</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,250</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,550</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,950</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,250</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.10.50</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.16.50</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center bg-[#E7E5E4] ">
                                <td className="border border-[#D6D3D1] text-center py-2 ">Sedan Premium</td>

                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.800</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,350</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,600</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,050</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,350</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.11</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.17</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center ">
                                <td className="border border-[#D6D3D1] text-center py-2 ">SUV</td>

                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,150</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,800</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,850</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,500</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.13.50</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.21</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center py-2 bg-[#E7E5E4] ">
                                <td className="border border-[#D6D3D1] text-center py-2 ">SUV Plus</td>

                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,850</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,900</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,300</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,600</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.13.75</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.22</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center py-2 ">
                                <td className="border border-[#D6D3D1] text-center py-2 ">SUV Comfort</td>

                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,300</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,000</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,950</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,600</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,800</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.15</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.25</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center py-2 bg-[#E7E5E4] ">
                                <td className="border border-[#D6D3D1] text-center py-2 text-[#1E40AF] font-bold">Innova Crysta</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.1,500</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.2,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.3,000</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.3,000</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.3,500</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.17</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.30</td>
                            </tr>
                            <tr className="border border-[#D6D3D1] text-center py-2 ">
                                <td className='text-[#1E40AF] font-bold'>Tempo Traveller</td>

                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.3,000</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.5,000</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.6,000</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.6,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.7,200</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.24</td>
                                <td className="border border-[#D6D3D1] text-center py-2 ">Rs.38</td>
                            </tr>
                            <tr className='border border-[#D6D3D1]'>
                                <td className='text-center border border-[#D6D3D1] py-2' colSpan="6"><em>Driver Charges (After 09:00 PM): Rs.300</em></td>
                                <td className='text-center border border-[#D6D3D1] py-2' colSpan="2"><em>Outstation: Min. 300KM / Day</em></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='mx-1 md:mx-14 mt-4 md:mt-10 relative overflow-x-auto'>
                <table className='w-full border border-[#D6D3D1]'>
                    <thead className='bg-[#172554] text-white '>
                        <tr className='border border-[#D6D3D1] '>
                            <th className='border-[#D6D3D1] border py-2 '>Route/Cab</th>
                            <th className='border-[#D6D3D1] border py-2 '>Sedan</th>
                            <th className='border-[#D6D3D1] border py-2 '>SUV</th>
                            <th className='border-[#D6D3D1] border py-2 '>Route/Cab</th>
                            <th className='border-[#D6D3D1] border py-2 '>Sedan</th>
                            <th className='border-[#D6D3D1] border py-2 '>SUV</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Varanasi to Ghazipur</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.1,700</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,200</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Varanasi to Dala</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,100</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,400</td>
                        </tr>
                        <tr className='bg-[#E7E5E4]'>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Varanasi to Mau</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,200</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,600</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Varanasi to Chopan</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,100</td>
                            <td className='text-center border border-[#D6D3D1] py-2 '>Rs.2,400</td>
                        </tr>
                        <tr className='text-center '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Buxer</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,400</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Agra</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.12,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.14,000</td>
                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 ' >Varanasi to Mau</td>
                            <td className='border border-[#D6D3D1] py-2 ' >Rs.2,200</td>
                            <td className='border border-[#D6D3D1] py-2 ' >Rs.2,600</td>
                            <td className='border border-[#D6D3D1] py-2 ' >Varanasi to Chopan</td>
                            <td className='border border-[#D6D3D1] py-2 ' >Rs.2,100</td>
                            <td className='border border-[#D6D3D1] py-2 ' >Rs.2,400</td>

                        </tr>
                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Buxer</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,400</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Agra</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.12,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.14,000</td>

                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 '>Varansi to Gaya</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.5,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.6,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Renukoot</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2800</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3200</td>

                        </tr>
                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '>Varansi to Babhuaa</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,800</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Shaktinagar</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,200</td>

                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 '>Varansi to Babhuaa</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,800</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Shaktinagar</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,200</td>

                        </tr>

                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Patna</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,700</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.6,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Singrauli</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,600</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,400</td>
                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Gorakhpur</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.5,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Prayaagraj</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,500</td>
                        </tr>
                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '> Varanasi to Azamgarh</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,400</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Kaushambi</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,200</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,800</td>

                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 ' >Varanasi to Jaunpur</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,600</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,900</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Chitrakoot</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,800</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.5,600</td>

                        </tr>
                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Ahraura</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,800</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Ayodhya</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,500</td>

                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Mirzapur</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,150</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Lucknow</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.4,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.6,000</td>

                        </tr>
                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Robertsganj</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2400</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Kanpur</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.5500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.6800</td>

                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Mathura</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.12,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.14,500</td>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Bhadohi</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.1,300</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.2,000</td>

                        </tr>
                        <tr className='text-center  '>
                            <td className='border border-[#D6D3D1] py-2 '>Varanasi to Ballia</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,000</td>
                            <td className='border border-[#D6D3D1] py-2 '>Rs.3,500</td>


                        </tr>
                        <tr className='text-center bg-[#E7E5E4] '>
                            <td  className='border border-[#D6D3D1] py-2 ' colSpan="3"><em>Driver Charges (After 10 PM): Rs.250</em></td>
                            <td className='border border-[#D6D3D1] py-2 '  colSpan="3"><em>Outstation: Min. 300KM / Day</em></td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <div className='mx-1 md:mx-14 mt-4 md:mt-10 relative overflow-x-auto w-full'>
                <div className="overflow-x-auto">
                    <table className="table w-full border border-[#D6D3D1] mx-auto">

                        <tbody>













                        </tbody>
                    </table>

                </div >
            </div >



        </>
    )
}

export default Home
