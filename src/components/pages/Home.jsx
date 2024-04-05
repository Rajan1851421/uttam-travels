
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
                <Card />

            </div>
            <div className='flex justify-evenly items-center mx-24 gap-4'>
                <div>
                    <img className='h-[300px] w-[400px] ' src="https://img.freepik.com/free-photo/view-3d-car_23-2150796896.jpg?size=626&ext=jpg&ga=GA1.1.108132751.1702923772&semt=ais" alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam molestiae tempora praesentium repellat architecto esse expedita eligendi ullam veniam possimus odio laboriosam eum a nisi, ab aliquam quam corrupti harum facere dicta earum saepe sapiente optio. Recusandae in maxime incidunt aperiam doloremque, ratione commodi dolorum nihil dolor maiores voluptatem repudiandae asperiores dicta vero iusto sunt eum! Culpa molestiae velit modi, ut eius corporis deleniti odio aspernatur, suscipit placeat perspiciatis? Consectetur eum, nesciunt dolor maiores placeat corrupti, delectus officiis facere rem itaque optio nihil aspernatur sint earum ut. Architecto hic qui quaerat ratione pariatur eos rerum perferendis asperiores similique aspernatur?</p>
                </div>

            </div>

        </>
    )
}

export default Home
