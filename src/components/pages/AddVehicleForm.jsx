import { useState, useEffect } from 'react';
import { FaCar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Login from '../login/Login';
import axios from 'axios';


function AddVehicleForm() {
  const [carImg, setCarImg] = useState(null);
  const [carName, setCarName] = useState('');
  const [carType, setCarType] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [rate, setRate] = useState('');
  const [uploading, setUploading] = useState(false); // State to track uploading status
  const [uploaded, setUploaded] = useState(false); // State to track uploaded status
  
  const { Token_login } = useSelector((state) => state.productStore);

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("A")
    try {
      setUploading(true); // Start uploading
      const formData = new FormData();
      formData.append('photo', carImg); 
      formData.append('carName', carName); 
      formData.append('carType', carType); 
      formData.append('rate', rate);
      

      const response = await axios.post('http://localhost:3000/vechile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      setShowStatus(true);
      setTimeout(() => {
        setShowStatus(false); // Hide status message after 3 seconds
      }, 3000);
      console.log('Response:', response.data);     
      setUploaded(true); // Set uploaded
      setTimeout(() => {
        setUploaded(false); // Reset uploaded status after 3 seconds
        setCarImg(''); // Clear form data
        setCarName('');
        setCarType('');
        setRate('');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setUploading(false); // Finish uploading
    }
  };

  

  return (
    <div className="mx-2 md:mx-[150px] my-2 md:my-4">
      <div className="w-full">
          {showStatus && <h2 className="py-1 text-center bg-green-500 fixed px-10 top-[100px] z-50 left-[43%] ">Uploaded Successfully</h2>}
        </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-md md:text-2xl font-extrabold text-center">ADD NEW VEHICLE</h1>
        <FaCar className="text-lg md:text-6xl text-[#4C0519] border rounded-full h-10 w-10 p-1" />
      </div>
      {Token_login ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-violet-200 to-pink-200 shadow-lg rounded px-8 p-4 md:p-14 mb-4 mt-2 md:mt-8"
        >
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
              Upload Photo
            </label>
            <input
              required
              type="file"
              id="photo"
              name="photo"
              onChange={(e) => {
                const file = e.target.files[0];
                setCarImg(file);
              }}
              className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Car Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Innova Crysta"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="carType" className="block text-gray-700 text-sm font-bold mb-2">
              Car Type
            </label>
            <select
              required
              id="carType"
              name="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Car Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="rate" className="block text-gray-700 text-sm font-bold mb-2">
              Rate
            </label>
            <input
              required
              type="number"
              id="rate"
              name="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="INR 12/km"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                uploading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : uploaded ? 'Uploaded' : 'Add Vehicle'}
            </button>
          </div>
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default AddVehicleForm;
