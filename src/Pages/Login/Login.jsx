import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result => {
        console.log(result.user)
        navigate("/")
    })
    .catch(error => console.error(error))
  };
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto bg-blue-100 rounded-lg px-5 py-8 lg:p-10 mt-5 md:mt-10 lg:mt-20">
      <h1 className="text-center text-3xl font-bold my-5">Login Now</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 ">
          <div className="flex flex-col ">
            <label className="mb-2 pl-3"> Email</label>
            <input
              {...register("email")}
              placeholder="Enter Your Email"
              className="input w-full"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="mb-2 pl-3"> Password</label>
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
              className="input w-full"
            />
            {errors.password && <span>This field is required</span>}
          </div>
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-block bg-blue-600 text-white hover:text-black mt-5"
        />
      </form>
      <p className="mt-5 md:mt-8 lg:mt-12 text-center text-lg">
        Do not Have an Account ?
        <Link to="/signUp" className="text-blue-600 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
