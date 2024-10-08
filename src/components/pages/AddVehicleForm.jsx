import { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";
import { useSelector } from "react-redux";
import Login from "../login/Login";
import axios from "axios";
import { toast } from "react-toastify";

function AddVehicleForm() {
  const [carImg, setCarImg] = useState(""); // URL of the car image
  const [carName, setCarName] = useState("");
  const [carType, setCarType] = useState("");
  const [rate, setRate] = useState("");
  const [uploading, setUploading] = useState(false); // To track uploading status
  const [uploaded, setUploaded] = useState(false); // To track uploaded status
  const [data,setData] = useState([])

  const { Token_login } = useSelector((state) => state.productStore);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true); // Set uploading to true
    const formData = new FormData();
    formData.append("carName", carName);
    formData.append("carType", carType);
    formData.append("image", carImg);
    formData.append("rate", rate);

    try {
      const response = await axios.post(
        "https://pro-backend-three-alpha.vercel.app/vehicle",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
      setUploaded(true); // Set uploaded to true on successful upload
      toast.success("Vehicle added successfully!");
      setData(response)
      setTimeout(() => {
        setUploaded(false); // Reset uploaded status after 3 seconds
        setCarImg(""); // Clear form data
        setCarName("");
        setCarType("");
        setRate("");
      }, 1000); // Notify success
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add vehicle!"); // Notify failure
    } finally {
      setUploading(false); // Reset uploading status
    }
  };

  return (
    <div className="mx-2 md:mx-[150px] my-2 md:my-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-md md:text-2xl font-extrabold text-center">
          ADD NEW VEHICLE
        </h1>
        <FaCar className="text-lg md:text-6xl text-[#4C0519] border rounded-full h-10 w-10 p-1" />
      </div>
      {Token_login ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-violet-200 to-pink-200 shadow-lg rounded px-8 p-4 md:p-14 mb-4 mt-2 md:mt-8"
        >
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Paste Image URL or Upload Image
            </label>
            <input
              required
              type="text" // Use 'url' type for the input
              id="photo"
              name="photo"
              value={carImg}
              onChange={(e) => setCarImg(e.target.value)}
              className="shadow appearance-none border border-[#1E1B4B] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="carType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="rate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
                uploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={uploading}
            >
              {uploading
                ? "Uploading..."
                : uploaded
                ? "Uploaded"
                : "Add Vehicle"}
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
