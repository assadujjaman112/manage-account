import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { data: person = {} } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        `https://manage-accounts-server.vercel.app/accounts/${user.email}`
      );
      return res.data;
    },
  });
  return (
    <div className="">
      <div className="bg-blue-200 mt-5 md:mt-10 lg:mt-20  w-11/12 md:w-3/5 mx-auto px-5 py-8 lg:p-10 rounded-lg">
        <h1 className="text-center font-bold text-3xl md:text-4xl">
          Your Profile
        </h1>
        <div className="flex justify-center items-center mt-8">
          <img src={person?.image} alt="" className="w-80 h-80 rounded-full" />
        </div>
        <div className="text-center mt-8">
          <h1 className="">
            <span className="text-xl font-bold">Name : </span> {person?.name}
          </h1>
          <p className="">
            <span className="text-xl font-bold">Email : </span> {person?.email}
          </p>
        </div>
        <Link to="/updateProfile">
          <button className="btn btn-block bg-blue-600 text-white hover:text-black mt-6">
            <FaUserEdit className="text-xl font-bold mr-3"></FaUserEdit> Edit
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
