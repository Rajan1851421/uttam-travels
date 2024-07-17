import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const Modal = () => {
    const [showModal, setShowModal] = useState(true);
    const { ViewVechile,loading } = useSelector((state) => state.productStore);
   
    const navigate = useNavigate()

    useEffect(() => {
       
       
    }, [])
    const handleCloseModal = () => {
        setShowModal(false)
        navigate('/')

    }

    if(loading){
        <h1>Loading....</h1>
    }

    return (
        <>


            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                       
                        <div className="relative flex flex-col w-full p-2 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                          <h1>Scorpio</h1>

                            <p className="text-center text-md sm:text-sm lg-text-md font-bold underline uppercase ">{ViewVechile && ViewVechile.Vehicle.carName}</p>
                            <div>
                                <img src={ViewVechile && ViewVechile.Vehicle.image} alt="image" />
                            </div>
                            <p className="text-center text-md sm:text-sm lg-text-md font-bold   ">{`Rate : ${ViewVechile && ViewVechile.Vehicle.rate} Km`}</p>

                           
                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-6 py-2 text-sm font-medium text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className="fixed inset-0 z-40 bg-black opacity-25"
                ></div>
            )}
        </>
    );
};

export default Modal;