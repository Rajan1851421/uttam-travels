
import { Link } from 'react-router-dom'
import '/src/App.css'
import Card from './Crad'


function Home() {
    return (
        <>
            <div className="mx-14">
                <h1 className="text-center text-lg md:text-4xl mt-2 md:mt-6  font-extrabold bungee-spice-regular">welcome  </h1>
                <p className='text-center font-bold mx-4 md:mx-48 dancing-script text-lg md:text-4xl my-4 '>
                    Thank you for choosing  <Link to='' className='text-[#1E40AF]'>Uttam Travels</Link> How can I assist you today? Whether you need help with booking, travel arrangements, or have any questions about your journey, feel free to ask. Your comfort and satisfaction are our top priorities.
                </p>

            </div>

            <div className='mx-14 my-4'>
                <Card/>

            </div>

        </>
    )
}

export default Home
