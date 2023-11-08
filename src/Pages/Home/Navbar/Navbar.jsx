import { NavLink } from "react-router-dom";
import { useContext } from "react";

import logo from '../../../assets/logo.jpg'
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                result.user
            })
            .catch(error => console.error(error))
    }


    const navLink = <>
        <li> <NavLink
            to="/"

        >
            Home
        </NavLink> </li>
        <li> <NavLink
            to="/aboutUs"

        >
            About Us
        </NavLink> </li>

        {user?.email ? <>
            <li>
                <NavLink
                    to="/bookings"

                >
                    Bookings
                </NavLink>
            </li>
            <li>  <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded  border-collapse">Log out</button>
            </li>

        </>



            : <li>
                <NavLink
                    to="/login">

                    Login
                </NavLink>
            </li>
        }




    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="max-w-7xl mx-auto navbar ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <img className="w-28  rounded-xl" src={logo} alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex justify-between">
                            <ul className="menu menu-horizontal font-extrabold">
                                {/* Navbar menu content here */}

                                {navLink}

                            </ul>
                            <div className="flex items-center gap-2 ">
                                <img className="w-10 h-10 md:h-14 rounded-full" src={user?.photoURL} alt="" />
                                <p className="mr-3">{user?.displayName}</p>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side z-10">

                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 md:h-14 rounded-full" src={user?.photoURL} alt="" />
                        <p className="mr-3">{user?.displayName}</p>
                    </div>


                    {navLink}
                    <li>
                        {
                            user ? <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded  border-collapse">Log out</button> : null
                        }
                    </li>
                </ul>

            </div >
        </div >
    )
};

export default Navbar;

{/* <div className="">
    <div className="flex items-center gap-4">
        <img className="h-10 md:h-14 rounded-full" src={user?.photoURL ? user.photoURL : undefined} alt="" />
        <p className="mr-3">{user?.displayName}</p>
    </div>

    {
        user ? <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded bg-red-600 border-collapse text-white">Log out</button> : null
    }

</div> */}
