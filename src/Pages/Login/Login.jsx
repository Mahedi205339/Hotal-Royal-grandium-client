import { Link, useLocation, useNavigate, } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
// import axios from "axios";
import { Helmet } from "react-helmet";
const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext)
    const [confirmMessage, setConfirmMessage] = useState("")
    const [error, setError] = useState("")

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('logging in...')
        try {

            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');
            if (!/[A-Z].{8,}$/.test(password)) {
                setError('Your password should have contain at least 8 character contained Capital letter ')
                return
            }
            setConfirmMessage("")
            setError("")
            await signIn(email, password)
                .then(result => {
                    const loggedUser = result.user
                    console.log(loggedUser)
                    // const user = { email };

                    // axios.post('https://hotel-royal-grandium-server-8gp5e4fi5-mahedis-projects.vercel.app/jwt', user, { withCredentials: true })
                    //     .then(res => {
                    //         console.log(res.data)
                    //     })

                    toast.success('logged in', { id: toastId })

                    navigate(location?.state ? location.state : '/')
                })

        } catch (error) {
            console.log(error)
        }





    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero-content flex-col  w-full mx-auto">
                {
                    error && < p className="text-yellow-600 font-bold">{error}</p>
                }
                {
                    confirmMessage && < p className="text-green-600 font-bold">{confirmMessage}</p>
                }
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-yellow-600 font-bold">Login now!</h1>
                </div>
                <div className="card  w-full max-w-sm">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-600 font-bold">Email :</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-600 font-bold">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered text-black" required />
                            <label className="label">
                                <a href="#" className="label-text-alt  text-yellow-600  link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 ">
                            <button className=" bg-yellow-600 text-white hover:bg-white  hover:text-yellow-600 w-36 h-10 rounded-lg">Login</button>
                        </div>
                    </form>
                    <p className="mb-4 text-center">Do not have an account ? Please <Link className="font-bold text-yellow-600 underline" to="/register">Register</Link> </p>
                </div>
                <div className="gap-2">
                    <button onClick={googleLogin} className="btn border border-yellow-600 text-yellow-600 my-4 btn-outline w-full">
                        <FcGoogle></FcGoogle>
                        Google
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Login;