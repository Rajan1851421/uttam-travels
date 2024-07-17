import { useSelector, useDispatch } from "react-redux";
import Login from "../components/login/Login";
import { deleteUser, getAllUser } from "../features/producrSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminManage() {
    const { Token_login, AllUser, loading } = useSelector((state) => state.productStore);
    const dispatch = useDispatch();
    const [loadingStates, setLoadingStates] = useState({});

    useEffect(() => {
        dispatch(getAllUser());

    }, [dispatch]);



    const handleUser = () => {
        dispatch(getAllUser());
    };

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
            {Token_login ? (
                <div className="bg-[#FCA5A5]">
                    <div className="mx-auto w-[90%] p-2 bg-white rounded-sm py-2">
                        <h1 className="text-center">Admin Control</h1>

                        <div className="mt-2 border mx-10 p-2">
                            <button
                                onClick={handleUser}
                                className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                            >
                                View All Register User
                            </button>
                        </div>
                        <div className="w-full mx-auto mt-2">
                            <div className="shadow-md sm:rounded-lg">
                                <div className="inline-block w-full align-middle">
                                    {AllUser && (
                                        <table className="w-[85%] mx-auto divide-y border divide-gray-200 table-fixed dark:divide-gray-700">
                                            <thead className="bg-gray-100 dark:bg-gray-700">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                    >
                                                        Username
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                    >
                                                        User Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                    >
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 px-2">
                                                {AllUser.map((ele, index) => (
                                                    <tr key={ele.email} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                                                        <td className="px-2">{ele.username}</td>
                                                        <td>{ele.userType}</td>
                                                        <td>{ele.email}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => handleDeleteUser(ele._id)}
                                                                className="px-6 py-1 text-sm font-medium text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300"
                                                            >
                                                                {loadingStates[ele._id] ? 'Deleting..' : 'Delete'}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </>
    );
}

export default AdminManage;
