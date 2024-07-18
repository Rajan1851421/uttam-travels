import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTestimonial, fetchTestimonial } from "../features/producrSlice";
import { toast } from "react-toastify";

function TestimonialData_manage() {
    const { Testimonial } = useSelector((state) => state.productStore)
    const dispatch = useDispatch()
    const [loadingStates, setLoadingStates] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchTestimonial())
    }, [dispatch])

    const handleDeleteUser = async (id) => {

        setLoadingStates((prev) => ({ ...prev, [id]: true }));
        try {
            await dispatch(deleteTestimonial(id))
            toast.success("Delete Successfully ")
            dispatch(fetchTestimonial());
        } catch (error) {
            console.log(error);
            toast.error("Please Try again Later ")
        } finally {
            setLoadingStates((prev) => ({ ...prev, [id]: false }));
        }

    }

    return (
        <div>

            {Testimonial && <div className="w-full mx-auto mt-2 overflow-x-auto">
                {Testimonial && (
                    <table className="w-full mx-auto divide-y border divide-gray-200 table-auto dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Rating
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Description
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
                            {Testimonial.slice(0, 8).map((ele, index) => (
                                <tr key={ele.email} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                                    <td className="px-2">{ele.name}</td>
                                    <td>{ele.rating}</td>
                                    <td>{ele.description}</td>
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
            </div>}
        </div>

    )
}

export default TestimonialData_manage
