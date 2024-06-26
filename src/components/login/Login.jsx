import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { IoIosSend } from "react-icons/io";
import { loginFetch } from "../../features/producrSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userid, setUserId] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');
    const [isLoading, setIsLoading] = useState(false); // State for managing loading state of login
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleLogin = () => {
        setIsLoading(true);
        dispatch(loginFetch({ username: userid, password })).finally(() => {
            setIsLoading(false);
        });
        navigate('/')
    };



    return (
        <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3 shadow-orange-500 ">
                    <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label
                                className="block font-semibold text-gray-700 mb-2"
                                htmlFor="email"
                            >
                                User Id
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Enter your User ID"
                                readOnly
                                value={userid}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block font-semibold text-gray-700 mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                readOnly
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline flex items-center"
                                type="button"
                                onClick={handleLogin}
                                disabled={isLoading} // Disable button when loading
                            >
                                {isLoading ? "Please Wait..." : "Login "}
                                <IoIosSend className="ml-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;
