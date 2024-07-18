import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import ContactCard from './ContactCard';
import { fetchTestimonial } from '../../features/producrSlice';
import axios from 'axios'

const Testimonials = () => {
  const [testmonialform, setTestmonialform] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState(''); 
  const dispatch = useDispatch()
  const { Testimonial } = useSelector((state) => state.productStore)

  useEffect(() => {
    dispatch(fetchTestimonial())
    console.log(Testimonial)
  }, [dispatch]);
  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('rating', rating);
    formData.append('description', message);      
    axios.post(`https://pro-backend-three-alpha.vercel.app/testimonial`, formData)
      .then(response => {
        console.log(response);
        toast.success(response.data.message);
        setName('');
        setRating('');
        setMessage('');
        // Dispatch fetchTestimonial here after successful submission
        dispatch(fetchTestimonial());
      })
      .catch(error => {
        console.log(error.message);
        if (error.message === 'Request failed with status code 409') {
          toast.error("Email OR Username already registered ");
        }
      });
  };
  

  const SubmitTestimonilas = () => {
    setTestmonialform(!testmonialform);

  };

  return (
    <div className="text-center mx-auto text-md md:text-2xl jost my-2 md:my-6">
      Our Satisfied Customers
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-10 my-4">
        <div className="col-span-2 my-4">
          {Testimonial && Testimonial.slice(0,8).map((ele, index) => (
            <div className="border p-2 mt-4" key={index}>
              <p className="font-semibold py-2 capitalize text-start text-sm ">Review By {ele.name}</p>
              <div className="flex text-[#FACC15] text-sm ">
                {[...Array(Number(ele.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {Number(ele.rating) < 5 && <FaStarHalfAlt />}
              </div>
              <div className="mt-2 italic text-start text-sm ">
                <p className="text-[#57534E]  ">{ele.description}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center  ">
            <button onClick={SubmitTestimonilas} className="bg-[#1E1B4B]  font-semibold text-sm text-white px-5 py-2 my-4 shadow-md ">
              Post Your Testimonials
            </button>
          </div>
          {testmonialform && (
            <div className="mx-2 w-full">
              <form action="" className="border p-5" onSubmit={handlePost}>
                <div className="flex flex-col w-full">
                  <div className="mb-3 flex flex-col">
                    <label className='text-sm font-semibold text-start  ' >Name</label>
                    <input
                      type="text"
                      id="name"
                      className="border p-2 text-sm "
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label className='text-sm font-semibold text-start  '>Rating</label>
                    <select
                      className='text-sm font-normal p-2  text-start  '
                      name="rating"
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select Rating</option>
                      <option value="1">1 Star</option>
                      <option value="2">2 Star</option>
                      <option value="3">3 Star</option>
                      <option value="4">4 Star</option>
                      <option value="5">5 Star</option>
                    </select>
                  </div>
                  <div className="mb-3 flex flex-col text-md ">
                    <label htmlFor="message" className='text-sm font-semibold text-start  ' >Your Message</label>
                    <textarea
                      className='text-sm font-normal p-2  text-start  '
                      id="message"
                      cols="30"
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="bg-[#1E1B4B] text-white px-10 py-2 text-sm font-normal flex items-center mx-1 " type="submit">
                      Post  <IoIosSend className='mx-1' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
        <div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
