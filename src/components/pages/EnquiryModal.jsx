import { useState } from 'react';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const EnquiryFormModal = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        tourDescription: '',
        departureDate: '',
        numberOfDays: '',
        email: '',
        mobileNo: '',
      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log(formData);
      
        
    };
    const handleCloseModal =()=>{
        setIsOpen(false)
        navigate('/service')
    }
    return (
        <div>

            {isOpen && (
                <div className="modal bg-white p-5">
                    <div className="modal-content">
                        <div className='flex justify-end '>
                            <span className="close" onClick={handleCloseModal}><ImCross className='cursor-pointer ' /></span>
                        </div>
                        <h2 className='text-center my-5 font-bold uppercase text-xl'>Enquiry Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className='mb-3 flex flex-col '>
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" name="fullName" placeholder="Your Full Name" value={formData.fullName} onChange={handleChange} required />
                                </div>
                                <div className='mb-3 flex flex-col '>
                                    <label htmlFor="">Discription</label>
                                    <input type="text" name="tourDescription" placeholder="Tour Description" value={formData.tourDescription} onChange={handleChange} required />
                                </div>
                                <div className='mb-3 flex flex-col '>
                                    <label htmlFor="">Departure Date</label>
                                    <input type="text" name="departureDate" placeholder="Departure Date" value={formData.departureDate} onChange={handleChange} required />
                                </div>
                                <div className='mb-3 flex flex-col '>
                                    <label htmlFor="">Bookin In Days</label>
                                    <input type="number" name="numberOfDays" placeholder="Number of Days" value={formData.numberOfDays} onChange={handleChange} required />
                                </div>
                                <div className='mb-3 flex flex-col '>
                                    <label htmlFor="">Your Email</label>
                                    <input type="email" name="email" placeholder="Email id" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className='mb-3 flex flex-col '>
                                    <label htmlFor="Mobile">Mobile</label>
                                    <input type="tel" name="mobileNo" placeholder="Mobile No." value={formData.mobileNo} onChange={handleChange} required />
                                </div>
                            </div>
                            <button className='mt-5 bg-[#172554] text-white px-5 py-2 text-sm w-full ' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnquiryFormModal;
