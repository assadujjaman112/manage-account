import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto bg-blue-100 rounded-lg px-5 py-8 lg:p-10 mt-5 md:mt-10 lg:mt-20">
      <h1 className="text-center text-3xl font-bold my-5">Sign Up Now</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 flex gap-5">
          <div className="flex flex-col w-1/2">
            <label className="mb-2 pl-3"> Name</label>
            <input
              {...register("name")}
              placeholder="Enter Your Name"
              className="input w-full"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="mb-2 pl-3"> Photo</label>
            <input
              {...register("image", { required: true })}
              placeholder="Photo URL"
              className="input w-full"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
        </div>
        <div className="mt-2 flex gap-5">
          <div className="flex flex-col w-1/2">
            <label className="mb-2 pl-3"> Email</label>
            <input
              {...register("email")}
              placeholder="Enter Your Email"
              className="input w-full"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="mb-2 pl-3"> Password</label>
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
              className="input w-full"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
        </div>

        <input type="submit" value="Sign Up" className="btn btn-block bg-blue-600 text-white hover:text-black mt-5"/>
      </form>
      <p className="mt-5 md:mt-8 lg:mt-12 text-center text-lg">Already Have an Account ? <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
    </div>
  );
};

export default Register;
