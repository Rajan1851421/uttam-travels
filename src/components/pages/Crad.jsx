import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVechile, DeleteVechile } from '../../features/producrSlice';
import { toast } from "react-toastify";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

function Card() {
 
  const { Token_login, vechiles, status } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(fetchVechile());
  }, [dispatch]);

  const handleDelete = async (id) => {
    console.log('Deleting item with id:', id);
    try {
      await dispatch(DeleteVechile(id)); // Wait for deletion to complete      
      toast.error(status)
      dispatch(fetchVechile()); // Fetch vehicles again after deletion
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
    <div className="bg-white bg-opacity-20 min-h-[100vh] flex items-center mx-auto ">
      <div className=" mx-auto w-full ">
        <div className="w-full">
          
        </div>
        <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-1 md:mx-5 xl:mx-10">
          {vechiles.map((data, index) => (
            <div className="border rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white" key={index}>
              <div className="cursor-pointer h-48 overflow-hidden">
                <img src={data.image} alt="Profile" className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out" />
              </div>
              <div className="p-4 space-y-2 relative h-60 text-gray-400">
                <div>
                  <p className="text-sm font-bold truncate capitalize ">{`Car Type : ${data.carType}`} </p>
                </div>
                <div>
                  <span style={myStyle} className="text-xl font-bold text-gray-600 overflow-hidden h-14 capitalize ">{`Car Name : ${data.carName}`}</span>
                </div>
                
                <div className="bottom-1 absolute inset-x-0">
                  <div className="border-t mt-1 mb-1"></div>
                  <span className="text-sm pl-4 text-gray-600  text-center">{`Rate:${data.rate} Km `} </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  {Token_login ? (
                    <button className="bg-[#79e2a4] mt-1 rounded-sm text-white px-4 text-md hover:bg-[#1E1B4B] cursor-pointer hover:rounded-md py-1">
                      Update
                    </button>
                  ) : null}
                  <button className="bg-[#ab9a67] rounded-sm text-white px-4 text-md hover:bg-[#1E1B4B] cursor-pointer hover:rounded-md py-1">View</button>
                  {Token_login ? (
                    <button onClick={() => handleDelete(data._id)} className="bg-[#824b5b] rounded-sm text-white px-4 text-md hover:bg-[#1E1B4B] cursor-pointer hover:rounded-md py-1">Delete</button>
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
