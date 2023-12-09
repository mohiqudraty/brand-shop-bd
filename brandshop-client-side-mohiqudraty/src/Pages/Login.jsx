import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle login with email and password
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Google SignIn Success");

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Please Provide Valid Email & Password");
      });
  };

  // handle sign in with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user), toast.success("Google SignIn Success");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-full lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold mb-2">Login now!</h1>
          <img src="https://i.ibb.co/cLmDD57/login.jpg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Login
              </button>
              <p className="text-sm mt-1">
                {" "}
                Don’t have an account?{" "}
                <Link className="text-blue-950 underline" to={"/register"}>
                  Register
                </Link>
              </p>
            </div>
          </form>
          {/* Divider */}
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-gray-800 w-4/5 mx-auto my-6 text-white hover:text-gray-900"
          >
            <FcGoogle /> SignIn With Google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
