import { useState } from "react";
import Label from "@/components/utilities/Label";
import Button from "@/components/utilities/Button";
import Image from "next/image";
import Link from "next/link";

const Form = () => {
  // Signup Data Starts
  const [signFormData, setSignFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignChange = (e) => {
    const { name, value } = e.target;
    setSignFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Signup Data Ends

  // Login Data Starts
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Login Data Ends

  // Password Visibility Starts
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // Password Visibility Stops

  // Error Handler Starts
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!signFormData.name) {
      validationErrors.name = "Name is required";
    }

    if (!signFormData.email && !loginFormData.email) {
      validationErrors.email = "Email is required";
    }

    if (!signFormData.password) {
      validationErrors.password = "Password is required";
    } else if (signFormData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    } else if (!/[a-zA-Z]/.test(signFormData.password)) {
      validationErrors.password =
        "Password must contain at least one character";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission here
      console.log("Form submitted:", signFormData);
    }
  };
  // Error Handler Stops

  return (
    <div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <Image
            className="lg:w-2/4 md:w-1/2 object-cover md:pr-10 object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/1200x500"
            alt="step"
            width={500}
            height={1200}
          />

          <div className="lg:w-2/4 md:w-1/2 md:py-6">
            <h2 className="text-gray-900 text-xl font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="flex">
              <button className="inline-flex items-center bg-white border border-gray-700 py-2 px-5 mr-2 focus:outline-none hover:bg-gray-200 hover:text-balablue hover:border-gray-700 transition-all rounded text-gray-600 mt-4 md:mt-0">
                <Image
                  className="w-5 mr-2"
                  src="/images/google.png"
                  width={16}
                  height={10}
                  alt="google"
                />
                Continue with google
              </button>
              <button className="inline-flex items-center bg-white border border-gray-700 py-2 px-5 focus:outline-none hover:bg-gray-200 hover:text-balablue hover:border-gray-700 transition-all rounded text-gray-600 mt-4 md:mt-0">
                <Image
                  className="w-5 mr-2"
                  src="/images/facebook.png"
                  alt="facebook"
                  width={10}
                  height={5}
                />
                Continue with facebook
              </button>
            </div>

            <p className="relative text-center py-4">
              <span className="absolute left-0 top-1/2 w-1/4 h-px bg-gray-300 transform -translate-y-1/2"></span>
              Or
              <span className="absolute right-0 top-1/2 w-1/4 h-px bg-gray-300 transform -translate-y-1/2"></span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-3">
                <Label name="Full Name" purpose="name" />
                <input
                  className={`${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:border-indigo-500`}
                  type="text"
                  name="name"
                  onChange={handleSignChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
              </div>
              <div className="relative mb-3">
                <Label name="Email" purpose="email" />
                <input
                  className={`${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:border-indigo-500`}
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleSignChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="relative mb-3">
                <Label name="Password" purpose="password" />
                <input
                  className={`${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:border-indigo-500`}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleSignChange}
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 mt-2 mr-3"
                  onClick={togglePasswordVisibility}
                >
                  {!showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
              </div>
              <Button type="submit" text="Sign up" />
            </form>
            <p className="text-sm text-gray-500 mt-3">
              Have an account?{" "}
              <span>
                <Link href="/login" className="text-primary">
                  Log in
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
