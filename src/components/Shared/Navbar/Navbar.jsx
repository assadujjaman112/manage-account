import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut();
    }
  return (
    <div className="shadow-lg py-3">
      <div className="navbar bg-base-100 w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-3xl md:text-4xl  font-bold">My <span className="text-blue-600">Site</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
            {
            user?  <button onClick={handleLogOut} className="bg-blue-800 text-white px-5 py-2 rounded-lg">Log Out</button> :
          <Link to="/login"><button className="bg-blue-800 text-white px-5 py-2 rounded-lg">Login</button></Link>
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
