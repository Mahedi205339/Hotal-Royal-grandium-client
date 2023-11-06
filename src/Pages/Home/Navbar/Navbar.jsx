import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from '../../../assets/logo.jpg'
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
            // className={({ isActive, isPending }) =>
            //     isPending ? "pending" : isActive ? "bg-red-600" : ""
            // }
        >
            Home
        </NavLink> </li>
        <li> <NavLink
            to="/aboutUs"
            // className={({ isActive, isPending }) =>
            //     isPending ? "pending" : isActive ? "bg-red-600" : ""
            // }
        >
            About Us
        </NavLink> </li>
        <li> <NavLink
            to="/login"
            // className={({ isActive, isPending }) =>
            //     isPending ? "pending" : isActive ? "bg-red-600" : ""
            // }
        >
            Login
        </NavLink> </li>
        <li> <NavLink
            to="/register"
            // className={({ isActive, isPending }) =>
            //     isPending ? "pending" : isActive ? "bg-red-600" : ""
            // }
        >
            Registration
        </NavLink> </li>
    </>

    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="max-w-7xl  before: mx-auto navbar rounded-t-xl">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <img className="w-32 rounded-full" src={logo} alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal font-semibold">
                            {/* Navbar menu content here */}
                            {navLink}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 font-semibold">
                    {/* Sidebar content here */}
                    {navLink}
                </ul>
                <div className="navbar-end">
                    <div className="flex items-center gap-4">
                        <img className="h-10 md:h-14 rounded-full" src={user?.photoURL ? user.photoURL : undefined} alt="" />
                        <p className="mr-3">{user?.displayName}</p>
                    </div>

                    {
                        user ? <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded bg-red-600 border-collapse text-white">Log out</button> : null
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
