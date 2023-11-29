import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";
import toast, { Toaster } from "react-hot-toast";
import useAuthCheck from "../hooks/useAuthCheck";

const Registration = () => {
  const isAuth = useAuthCheck();
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const [errors, setErrors] = React.useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [inputData, setInputData] = React.useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate first_name
    if (!inputData.first_name.trim()) {
      newErrors.first_name = "First name is required";
      valid = false;
    } else {
      newErrors.first_name = "";
    }

    // Validate last_name
    if (!inputData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
      valid = false;
    } else {
      newErrors.last_name = "";
    }

    // Validate phone
    if (!inputData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else {
      newErrors.phone = "";
    }

    // Validate email
    if (!inputData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (!inputData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    // Validate confirm_password
    if (!inputData.confirm_password.trim()) {
      newErrors.confirm_password = "Confirm password is required";
      valid = false;
    } else if (inputData.password !== inputData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
      valid = false;
    } else {
      newErrors.confirm_password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (validateForm()) {
      register(inputData).then((res) => {
        if (res?.data) {
          toast.success(`${res?.data?.message}`);
          navigate("/");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-no-repeat bg-center lg:block lg:w-2/5"
            style={{
              backgroundImage: "url('/src/assets/authcover.jpg')",
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <Link to={"/"}>
                <img className="w-72 mb-10" src="/src/assets/logo.png" alt="" />
              </Link>
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <form
                onSubmit={registerUser}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="John"
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md ${
                      errors.first_name
                        ? "border-red-500"
                        : "focus:border-blue-400"
                    } dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    name="last_name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Snow"
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md ${
                      errors.last_name
                        ? "border-red-500"
                        : "focus:border-blue-400"
                    } dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.last_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    name="phone"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md ${
                      errors.phone ? "border-red-500" : "focus:border-blue-400"
                    } dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="johnsnow@example.com"
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md ${
                      errors.email ? "border-red-500" : "focus:border-blue-400"
                    } dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Enter your password"
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md ${
                      errors.password
                        ? "border-red-500"
                        : "focus:border-blue-400"
                    } dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirm password
                  </label>
                  <input
                    name="confirm_password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Enter your password"
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md ${
                      errors.confirm_password
                        ? "border-red-500"
                        : "focus:border-blue-400"
                    } dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
                  />
                  {errors.confirm_password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirm_password}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  <span>Registration</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
              <p className="mt-2">
                Already have account?
                <Link to={"/login"}>
                  <span className="text-blue-500">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Registration;
