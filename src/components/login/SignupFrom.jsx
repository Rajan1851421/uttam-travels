import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from './Login'





const RegistrationForm = () => {
    const { Token_login } = useSelector((state) => state.productStore);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [usertype, setUsertype] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 20)
    }, [])

    const handleFormSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('userType', usertype);
        formData.append('password', password);
        axios.post(`https://pro-backend-three-alpha.vercel.app/user/signup`, formData)
            .then(response => {
                console.log(response);
                toast.success(response.data.message)
                setUserName('');
                setEmail('');
                setPhone('');
                setPassword("");
                setUsertype('');
            })
            .catch(error => {
                console.log(error.message);
                if (error.message == 'Request failed with status code 409') {
                    toast.error("Email OR Username already registerd ")
                }
            });
    };
    const handleSignInMove = () => {
        navigate('/login')
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            {Token_login ?
            (<div className="h-[100vh] items-center pb-10 flex justify-center px-5 lg:px-0">
                <div className="max-w-screen-lg h-[90%] bg-white border shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="flex-1 bg-blue-900 text-center hidden md:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
                            }}
                        ></div>
                    </div>
                    <div className="lg:w-1/2 xl:w-5/12 p-2 sm:p-12">
                        <div className="flex flex-col items-center">
                            <div className="text-center">
                                <h1 className="text-xl xl:text-2xl font-extrabold text-blue-900 uppercase ">
                                    Owner Regitration
                                </h1>
                                <p className="text-[12px] text-gray-500">
                                    Hey enter your details to create your account
                                </p>

                            </div>
                            <form className="w-full flex-1 mt-8" onSubmit={handleFormSubmit}>
                                <div className="mx-auto max-w-xs flex flex-col gap-4">
                                    <input
                                        className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        required
                                        placeholder="Enter Username ..."
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <input
                                        className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="tel"
                                        required
                                        placeholder="Enter your phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <input
                                        className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="mt-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" checked={showPassword} onChange={toggleShowPassword} />
                                            <span className="ml-2 text-sm">Show Password</span>
                                        </label>
                                    </div>
                                    <select
                                        required
                                        value={usertype}
                                        onChange={(e) => setUsertype(e.target.value)}
                                        className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    >
                                        <option value="">--Select User--</option>
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                    <button
                                        type="submit"
                                        className="mt-0 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >

                                        <span className="ml-3">Sign Up</span>
                                    </button>
                                    <p className="mt-4 text-xs text-gray-600 text-center">
                                        Already have an account?{" "}
                                        <p onClick={handleSignInMove} className="cursor-pointer ">
                                            <span className="text-blue-900 font-semibold">Sign in</span>
                                        </p>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>): <Login/> }
        </>
    );
};

export default RegistrationForm;
