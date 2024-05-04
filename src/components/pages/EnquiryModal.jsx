import { useState } from 'react';

const EnquiryFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    tourDescription: '',
    departureDate: '',
    numberOfDays: '',
    email: '',
    mobileNo: '',
    country: 'India',
    countryCode: '+91',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send the data to a backend API
    console.log(formData);
    // Close the modal after submission
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Enquiry Form</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <h2>Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Your Full Name" value={formData.fullName} onChange={handleChange} required />
              <input type="text" name="tourDescription" placeholder="Tour Description" value={formData.tourDescription} onChange={handleChange} required />
              <input type="text" name="departureDate" placeholder="Departure Date" value={formData.departureDate} onChange={handleChange} required />
              <input type="number" name="numberOfDays" placeholder="Number of Days" value={formData.numberOfDays} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email id" value={formData.email} onChange={handleChange} required />
              <div>
                <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                  <option value="+91">India +91</option>
                  {/* Add more country codes here */}
                </select>
                <input type="tel" name="mobileNo" placeholder="Mobile No." value={formData.mobileNo} onChange={handleChange} required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryFormModal;
