import { useSelector, useDispatch } from "react-redux";
import Login from "../components/login/Login";
import { deleteUser, getAllUser } from "../features/producrSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TestimonialData_manage from "./TestimonialData_manage";

function AdminManage() {
    const { Token_login, AllUser, UserType } = useSelector((state) => state.productStore);
    const dispatch = useDispatch();
    const [loadingStates, setLoadingStates] = useState({});
    const [usertable, setUserTable] = useState(true)
    const [feedbackTable, setFeddbackTable] = useState(false)

    useEffect(() => {
        dispatch(getAllUser());
        setUserTable(true)
        setFeddbackTable(false)
    }, [dispatch]);



    const handleUser = () => {
        setUserTable(true)
        dispatch(getAllUser());
        setFeddbackTable(false)
    };
    const handleFeedback = () => {
        setFeddbackTable(true)
        setUserTable(false)
    }

    const handleDeleteUser = async (id) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
        try {
            await dispatch(deleteUser(id));
            toast.success("Delete Successfully ")
            dispatch(getAllUser());
        } catch (error) {
            console.log(error);
            toast.error("Please Try again Later ")
        } finally {
            setLoadingStates((prev) => ({ ...prev, [id]: false }));
        }


    };

    return (
        <>
            {Token_login && UserType === 'admin' ? (
                <div className="bg-[#FCA5A5] h-screen ">
                    <div className="mx-auto w-[90%] p-2 bg-white rounded-sm py-2 h-screen ">
                        <h1 className="text-center font-bold text-xxl py-4 sm:py-1 sm:text-sm ">Admin Control</h1>

                        <div className="mt-2 border p-2 flex flex-col md:flex-row justify-around mx-2">
                            <button
                                onClick={handleUser}
                                className="w-full md:w-auto px-6 py-2 md:px-4 md:py-2 text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                            >
                                View All Register User
                            </button>
                            <button
                                onClick={handleFeedback}
                                className="w-full mt-2 md:mt-0 md:w-auto px-6 py-2 md:px-4 md:py-2 text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                            >
                                View All Testimonial
                            </button>
                            <Link to="/change_password"
                                
                                className="w-full mt-2 md:mt-0 md:w-auto px-6 py-2 md:px-4 md:py-2 text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                            >
                                Change Password
                            </Link>
                            
                        </div>

                        {usertable && <div className="w-full mx-auto mt-2">

                            {AllUser && (
                                <div className="w-full mx-auto mt-2 overflow-x-auto">
                                    <table className="w-[85%] table-auto mx-auto divide-y border divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 sm:px-2 sm:py-1 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                >
                                                    Username
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 sm:px-2 sm:py-1 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                >
                                                    User Type
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 sm:px-2 sm:py-1 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 sm:px-2 sm:py-1 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 px-2">
                                            {AllUser.map((ele, index) => (
                                                <tr key={ele.email} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                                                    <td className="px-2 sm:px-1">{ele.username}</td>
                                                    <td className="px-2 sm:px-1">{ele.userType}</td>
                                                    <td className="px-2 sm:px-1">{ele.email}</td>
                                                    <td className="px-2 sm:px-1">
                                                        <button
                                                            onClick={() => handleDeleteUser(ele._id)}
                                                            className="px-6 py-1 sm:px-3 sm:py-0.5 text-sm font-medium text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300"
                                                        >
                                                            {loadingStates[ele._id] ? 'Deleting..' : 'Delete'}
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            )}

                        </div>}
                        {
                            feedbackTable && <TestimonialData_manage />
                        }
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </>
    );
}

export default AdminManage;
