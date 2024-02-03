import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.patch(`https://manage-accounts-server.vercel.app/accounts/${user.email}`,data)
    .then(res => {
        if(res.data.modifiedCount >0){
            navigate("/");
        }
    })

  };
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto bg-blue-100 rounded-lg px-5 py-8 lg:p-10 mt-5 md:mt-10 lg:mt-20">
      <h1 className="text-center text-3xl font-bold my-5">Edit Your Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 flex gap-5">
          <div className="flex flex-col w-1/2">
            <label className="mb-2 pl-3"> Name</label>
            <input
            defaultValue={user.displayName}
              {...register("name")}
              className="input w-full"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="mb-2 pl-3"> Photo</label>
            <input
              {...register("image", { required: true })}
              defaultValue={user.photoURL}
              className="input w-full"
            />
            {errors.password && <span>This field is required</span>}
          </div>
        </div>
        <div className="mt-2 flex gap-5">
          <div className="flex flex-col w-full">
            <label className="mb-2 pl-3"> Email</label>
            <input
              {...register("email")}
              defaultValue={user.email}
              className="input w-full"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Edit Now"
          className="btn btn-block bg-blue-600 text-white hover:text-black mt-5"
        />
      </form>
    </div>
  );
};

export default EditProfile;
