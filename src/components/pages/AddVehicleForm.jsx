import { useEffect, useState } from 'react'
import { FaCar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Login from '../login/Login';

function AddVehicleForm() {
  const [carImg, setCarImg] = useState(null)
  const [carName, setCarName] = useState('')
  const [carType, setCarType] = useState('')
  const [rate, setRate] = useState('')
  const { Token_login } = useSelector((state) => state.productStore)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a vehicle object
    const vehicle = {
      carImg: carImg ? URL.createObjectURL(carImg) : null, // Convert file to a URL for preview (not for actual storage)
      carName,
      carType,
      rate,
    };
  
    // Retrieve existing session storage data
    const existingData = sessionStorage.getItem("Vehicle_added");
    let newData = [];
  
    if (existingData) {
      try {
        // Parse existing data from session storage
        newData = JSON.parse(existingData);
        
        // Check if newData is an array, if not then convert to an array
        if (!Array.isArray(newData)) {
          newData = [newData];
        }
      } catch (error) {
        console.error('Error parsing existing session data:', error);
        newData = [];
      }
    }
  
    // Append the new vehicle data to the existing array
    newData.push(vehicle);
  
    // Store the updated array back into session storage
    sessionStorage.setItem("Vehicle_added", JSON.stringify(newData));  
    clearFormFields();
    console.log('Vehicle added:', vehicle);
  };
  
  const clearFormFields = () => {
  // Reset or clear the form fields here
  setCarImg(null);
  setCarName("");
  setCarType("");
  setRate("");
};
  

  return (
    <div className="mx-2 md:mx-[150px] my-2 md:my-4">
      <div className='flex flex-col justify-center  items-center '>
        <h1 className='text-md md:text-2xl font-extrabold text-center '>ADD NEW VECHILE</h1>
        <FaCar className='text-lg md:text-6xl text-[#4C0519] border rounded-full h-10 w-10 p-1 ' />
      </div>
      {
        Token_login ? (
          <form onSubmit={handleSubmit} className="bg-gradient-to-r from-violet-200 to-pink-200 shadow-lg  rounded px-8 p-4  md:p-14 mb-4 mt-2 md:mt-8 ">
            <div className="mb-4">
              <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Upload Photo</label>
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
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Car Name</label>
              <input type="text" id="name" name="name" value={carName} onChange={(e) => setCarName(e.target.value)}
                className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Innova Crysta " required />
            </div>
            <div className="mb-4">
              <label htmlFor="carType" className="block text-gray-700 text-sm font-bold mb-2">Car Type</label>
              <select required id="carType" name="carType" value={carType} onChange={(e) => setCarType(e.target.value)}
                className="shadow appearance-none border border-[#1E1B4B]  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                <option value="">Select Car Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
                <option value="coupe">Couple</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="rate" className="block text-gray-700 text-sm font-bold mb-2">Rate</label>
              <input required type="number" id="rate" name="rate" value={rate} onChange={(e) => setRate(e.target.value)} className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="INR 12/km " />
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Vehicle
              </button>
            </div>
          </form>
        ) :
          (


            <Login />

          )
      }

    </div>
  );
}

export default AddVehicleForm;
