import ContactCard from "./ContactCard"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";


function Testimonials() {
    
    const [testmonialform,setTestimonialForm] = useState(false)
    const SubmitTestimonilas=()=>{
        setTestimonialForm(prevState => !prevState);
    }
    const handlePost =()=>{
        setTestimonialForm(false)
    }
    return (
        <>
            <div className="text-center mx-auto text-md md:text-2xl jost my-2 md:my-6  ">Our Satisfied Customers</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-10 my-4">
                <div className="col-span-2 my-4">
                    <div className="border p-2 ">
                        <p className="font-semibold py-2 ">Review By Rajan</p>
                        <div className="flex text-[#FACC15] ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className="mt-2 italic">
                            <p className="text-[#57534E] ">
                                My decision to put my faith in this company for longer period turns out to be the best decision I have ever made. I am enjoying their services from very long and thus, I can confidently state that they provide the best deals for any travel requirement. Thank you for turning me into a loyal client of yours.
                            </p>
                        </div>

                    </div>

                    <div className="border p-2 mt-4 ">
                        <p className="font-semibold py-2 ">Review By Anjan </p>
                        <div className="flex text-[#FACC15] ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className="mt-2 italic">
                            <p className="text-[#57534E] ">
                                My decision to put my faith in this company for longer period turns out to be the best decision I have ever made. I am enjoying their services from very long and thus, I can confidently state that they provide the best deals for any travel requirement. Thank you for turning me into a loyal client of yours.
                            </p>
                        </div>

                    </div>
                    <div className="border p-2 mt-4 ">
                        <p className="font-semibold py-2 ">Review By Anjan </p>
                        <div className="flex text-[#FACC15] ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className="mt-2 italic">
                            <p className="text-[#57534E] ">
                                My decision to put my faith in this company for longer period turns out to be the best decision I have ever made. I am enjoying their services from very long and thus, I can confidently state that they provide the best deals for any travel requirement. Thank you for turning me into a loyal client of yours.
                            </p>
                        </div>

                    </div>
                    <div className="flex justify-center items-center ">
                        <button onClick={SubmitTestimonilas} className="bg-[#1E1B4B] text-white px-6 py-2 my-2 ">Post Your Testimonials </button>
                    </div>
                    {testmonialform && <div className="mx-2  w-full   ">
                        <form action="" className="border p-5 ">
                            <div className="flex flex-col w-full">
                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="border p-1" placeholder="Name" required />
                                </div>
                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="">Rating</label>
                                    <select name="rating" id="" className="p-1">
                                        <option value="1"> 1 Star</option>
                                        <option value="1"> 2 Star</option>
                                        <option value="1">3 Star</option>
                                        <option value="1">4 Star</option>
                                        <option value="1">5 Star</option>
                                    </select>
                                </div>

                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="">Your Message</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="flex justify-center items-center ">
                                    <button className='bg-[#1E1B4B] text-white px-8 py-2 ' onClick={handlePost} >Post</button>
                                </div>

                            </div>
                        </form>
                    </div>}

                </div>
                <div>
                    <ContactCard />
                </div>

            </div>


        </>
    )
}

export default Testimonials
