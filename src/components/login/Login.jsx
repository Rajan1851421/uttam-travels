import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginFetch } from "../../features/producrSlice.js"; // Corrected import path
import { useNavigate, Link } from "react-router-dom";
// import { useAuth0 } from '@auth0/auth0-react';
import { toast } from "react-toastify";

function Login() {
    // const { loginWithRedirect ,logout ,isAuthenticated,user  } = useAuth0();
    const [userid, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { Token_login, error, status } = useSelector((state) => state.productStore);

    useEffect(() => {
        window.scrollTo(0, 50);

    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Dispatch the login action and wait for it to complete
            const result = await dispatch(loginFetch({ username: userid, password }));

            // Assuming `loginFetch` sets `Token_login` in the store when successful
            const { token } = result.payload;

            if (token) {
                toast.success("Login Successful");
                navigate('/'); // Redirect to home after successful login
            } else {
                toast.error("Login Failed. Please try again.");
            }
        } catch (error) {
            toast.error("Login Failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            <div className="py-16">
                <div className="flex bg-[#E7E5E4] rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover  "
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}
                    />
                    <div className="w-full p-8 lg:w-1/2">
                        <Link to='/' className="flex justify-center items-center">
                            <img className='h-[70px] w-[70px] rounded-full' src="https://images.unsplash.com/photo-1715346848307-84385a7f3a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </Link>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3">
                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#FFC107"
                                    />
                                    <path
                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                        fill="#FF3D00"
                                    />
                                    <path
                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                        fill="#4CAF50"
                                    />
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#1976D2"
                                    />
                                </svg>
                            </div>
                            <Link to="/login" className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</Link>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input
                                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                    type="text"
                                    id="email"
                                    placeholder="Enter your username"
                                    required
                                    value={userid}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <label className="flex items-center">
                                        <input type="checkbox" checked={showPassword} onChange={toggleShowPassword} />
                                        <span className="ml-2 text-sm">Show Password</span>
                                    </label>
                                </div>
                                <input
                                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Link to="/change_password" className="text-sm text-gray-500 ">Change Password</Link>
                            </div>

                            <div className="mt-8">
                                <button
                                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Please Wait..." : "Login "}

                                </button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;
