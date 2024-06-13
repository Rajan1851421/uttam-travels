import  { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";

import ContactCard from './ContactCard';

const Testimonials = () => {
  const [testmonialform, setTestmonialform] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials'));
    if (storedTestimonials) {
      setTestimonials(storedTestimonials);
    }
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    const newTestimonial = { name, rating, message };
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    setName('');
    setRating('');
    setMessage('');
  };

  const SubmitTestimonilas = () => {
    setTestmonialform(!testmonialform);
  };

  return (
    <div className="text-center mx-auto text-md md:text-2xl jost my-2 md:my-6">
      Our Satisfied Customers
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-10 my-4">
        <div className="col-span-2 my-4">
          {testimonials.map((testimonial, index) => (
            <div className="border p-2 mt-4" key={index}>
              <p className="font-semibold py-2 capitalize text-start text-sm ">Review By {testimonial.name}</p>
              <div className="flex text-[#FACC15] text-sm ">
                {[...Array(Number(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {Number(testimonial.rating) < 5 && <FaStarHalfAlt />}
              </div>
              <div className="mt-2 italic text-start text-sm ">
                <p className="text-[#57534E]  ">{testimonial.message}</p>
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
