import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
// import Swal from 'sweetalert2'
const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);

    const [confirmMessage, setConfirmMessage] = useState("")
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('logging in...')
        try {
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');
            const name = form.get('name')
            console.log(email, name, password)
            if (!/[A-Z].{8,}$/.test(password)) {
                setError('Your password should have contain at least 8 character  Capital letter ')
                return
            }
            setError('');
            setConfirmMessage('')

            await createUser(email, password)
                .then(result => {
                    console.log(result.user)

                    toast.success('logged in', { id: toastId })
                    navigate(location?.state ? location.state : '/')
                })

        }
        catch (error) {
            toast.error(error.message)
        }
    }








    return (
        <div>
            <div className="hero-content flex-col  w-full mx-auto">

                {
                    error && < p className="text-yellow-600 font-bold">{error}</p>
                }
                {
                    confirmMessage && < p className="text-green-600 font-bold">{confirmMessage}</p>
                }

                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Register</h1>

                </div>
                <div className="card  w-full max-w-sm ">
                    <form onSubmit={handleRegister} className="card-body text-yellow-700">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-700 font-bold">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder=" your name" className="input input-bordered text-yellow-700" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-700 font-bold">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email" className="input input-bordeyellow text-yellow-700 font-bold" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-700 font-bold">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordeyellow text-yellow-700" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-yellow-700 font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <div className="form-control mt-6 ">
                                <button className=" bg-yellow-600 text-white hover:bg-white  hover:text-yellow-600 w-36 h-10 rounded-lg">Register</button>
                            </div>
                        </div>
                    </form>
                    <p className="mb-4 text-center">Already have an account? Please <Link className="font-bold text-yellow-600 underline" to="/login">Login</Link> </p>
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
}


export default Register;