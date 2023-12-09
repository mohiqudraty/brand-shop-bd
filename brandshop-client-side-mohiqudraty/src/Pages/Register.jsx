import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // handle register -----------------
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(form, name, email, photo, password);

    if (password.length < 6) {
      toast.error("Password must be  6 characters long.");
      return;
    }

    const hasCapitalLetter = /(?=.*?[A-Z])/.test(password);
    const hasSpecialCharacter = /(?=.*?[#?!@$%^&*-])/.test(password);

    if (!hasCapitalLetter) {
      toast.error("Password must contain one uppercase letter.");
      return;
    }
    if (!hasSpecialCharacter) {
      toast.error("Password must contain one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user),
          // user profile updated updated
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              console.log("Profile Updated");
              toast.success("Register Success");
              navigate("/");
            })
            .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-full lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <img src="https://i.ibb.co/ZWDrxm8/signup-vector.png" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
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
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Register
              </button>
              <p className="text-sm mt-1">
                Have an Account?{" "}
                <Link className="text-blue-950 underline" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
