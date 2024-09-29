import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import {
  fetchVechile,
  DeleteVechile,
  viewVehicle,
} from "../../features/producrSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

function Card() {
  const { Token_login, vechiles } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchVechile());
  }, [dispatch]);

  const handleView = async (id) => {
    console.log(id);
    dispatch(viewVehicle(id));
    navigate("/view");
  };

  const handleDelete = async (id) => {
    console.log("Deleting item with id:", id);
    try {
      await dispatch(DeleteVechile(id)); // Wait for deletion to complete
      toast.error("Delete Successfully ");
      dispatch(fetchVechile()); // Fetch vehicles again after deletion
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
    <div className="bg-white bg-opacity-20 min-h-[100vh] flex items-center mx-auto ">
      <div className=" mx-auto w-full ">
        <div className="w-full"></div>
        <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-1 md:mx-5 xl:mx-10">
          {vechiles.map((data, index) => (
            <div
              className="border rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white"
              key={index}
            >
              <div className="cursor-pointer h-48 overflow-hidden">
                <img
                  src={data.image}
                  alt="Profile"
                  className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                />
              </div>
              <div className="p-4 space-y-2 relative h-60 text-gray-400">
                <div>
                  <p className="text-sm font-bold truncate capitalize ">
                    {`Car Type : ${data.carType}`}{" "}
                  </p>
                </div>
                <div>
                  <span
                    style={myStyle}
                    className="text-xl font-bold text-gray-600 overflow-hidden h-14 capitalize "
                  >{`Car Name : ${data.carName}`}</span>
                </div>
                <div className="flex justify-center items-center ">
                  <span className="bg-gray-200 px-2 py-1 text-green-600 " > <Link to="/contact" >Book Now</Link> </span>
                </div>


                <div className="border-t mt-1 mb-1"></div>
                <div className="bottom-1 absolute inset-x-0 bg-[#3343a0] py-2">
                  <span className="text-sm pl-4 text-white text-center ">
                    {`Update At : ${new Date(data.updatedAt).toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  {Token_login ? (
                    <button className="px-6 py-1 text-sm font-medium text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300">
                      Update
                    </button>
                  ) : null}
                  <button
                    onClick={() => handleView(data._id)}
                    className="px-6 py-1 text-sm font-medium text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    View
                  </button>
                  {Token_login ? (
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="px-6 py-1 text-sm font-medium text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
