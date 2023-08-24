"use client";

import React, { useState, useEffect } from "react";
import Label from "@/components/utilities/Label";
import Link from "next/link";
import Image from "next/image";
import Button from "./utilities/Button";
import Input from "@/components/utilities/Input";
import Modal from "@/components/Modal";
import googleIcon from "/public/images/google.png";
import facebookIcon from "/public/images/facebook.png";
import carEngine from "/public/images/engine 3.jpeg";
import supabase from "@/app/config/supabaseClient";
import { useRouter } from "next/navigation";

const ERROR_MESSAGE = {
  email: "Email address is required",
  password: "Passord is required",
};

const LoginForm = () => {
  const router = useRouter();
  // Login Data Starts
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Login Data Ends

  const [isLoading, setIsLoading] = useState(false);

  // Password Visibility Starts
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // Password Visibility Stops

  // Error Handler Starts
  const [errors, setErrors] = useState({});
  const [authMessage, setAuthMessage] = useState("");

  // Error message for form handler starts
  useEffect(() => {
    let timeoutId;

    if (authMessage) {
      // Set a timeout to clear the error message after 5 seconds (5000 milliseconds)
      timeoutId = setTimeout(() => {
        setAuthMessage("");
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [authMessage]);
  // Error message for form handler starts

  //Remove Error when cursor is removed
  const handleBlur = (e) => {
    const { name } = e.target;
    if (!loginFormData[name]) {
      setErrors((prev) => ({ ...prev, [name]: ERROR_MESSAGE[name] }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  //Remove Error when cursor is removed

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = {};
  
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  
    if (!loginFormData.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(loginFormData.email)) {
      validationErrors.email = "Invalid email address";
    }
  
    if (!loginFormData.password) {
      validationErrors.password = "Password is required";
    } else if (loginFormData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    } else if (!/[a-zA-Z]/.test(loginFormData.password)) {
      validationErrors.password =
        "Password must contain at least one character";
    }
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsLoading(true);
 
        const { data, error } = await supabase.auth.signInWithPassword({
          email: loginFormData.email,
          password: loginFormData.password,
        });
  
        if (error) {
          console.error("Login error:", error.message);
          setAuthMessage("Email or password does not match records.");
        } else {
          console.log("Logged in user:", data.user.id); 
          router.push("/book");
          // Redirect or update state after successful login
        }
      } catch (error) {
        console.error("Login error:", error.message);
        setAuthMessage("An error occurred while signing in");
      } finally {
        setIsLoading(false);
      }
    }

    // const userId = data.user.id;
    // console.log(userId);
  };
  


  const handleOAuthSignIn = async (provider) => {
    try {
      const { user, error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) {
        console.error('OAuth sign-in error:', error.message);
        setAuthMessage('Error during OAuth sign-in.');
      } else {
        console.log('OAuth sign-in user:', user);
        router.push('/book');
      }
    } catch (error) {
      console.error('OAuth sign-in error:', error.message);
      setAuthMessage('An error occurred during OAuth sign-in.');
    }
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full items-center">
          <Image
            className="lg:w-2/4 md:w-1/2 px-0 md:px-0 object-cover brightness-50 object-center rounded-xl md:mt-0 mt-12"
            src={carEngine}
            alt="step"
            width={500}
            height={1200}
          />

          <div className="lg:w-2/4 w-full md:w-1/2 md:py-0 py-16 px-8 md:px-16">
            <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">
              Welcome Back
            </h2>
            <div className="flex xl:flex-row flex-col gap-y-4">
              <button
                onClick={() => handleOAuthSignIn("google")}
                className="w-full inline-flex items-center bg-white border border-gray-700 py-3 px-5 mr-2 focus:outline-none hover:bg-gray-200 hover:text-balablue hover:border-gray-700 transition-all rounded text-gray-600 mt-4 md:mt-0"
              >
                <Image className="w-4 mr-2" src={googleIcon} alt="google" />
                Continue with google
              </button>
              <button
                onClick={() => handleOAuthSignIn("facebook")}
                className="w-full inline-flex items-center bg-white border border-gray-700 py-3 px-5 focus:outline-none hover:bg-gray-200 hover:text-balablue hover:border-gray-700 transition-all rounded text-gray-600 mt-4 md:mt-0"
              >
                <Image className="w-4 mr-2" src={facebookIcon} alt="facebook" />
                Continue with facebook
              </button>
            </div>

            <p className="relative text-center py-4">
              <span className="absolute left-0 top-1/2 w-1/4 h-px bg-gray-300 transform -translate-y-1/2"></span>
              Or
              <span className="absolute right-0 top-1/2 w-1/4 h-px bg-gray-300 transform -translate-y-1/2"></span>
            </p>
            <div className="flex justify-center">
              {authMessage && (
                <p className="text-red-500 text-lg italic mt-2">
                  {authMessage}
                </p>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-3">
                <Label name="Email" purpose="email" />
                <Input
                  className={`${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:border-primary`}
                  type="email"
                  name="email"
                  ph="Enter email address"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="relative ">
                <Label name="Password" purpose="password" />
                <Input
                  className={`${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:border-primary`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  ph="Enter password"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
                <p className="text-end">
                  <button
                    type="button"
                    className="text-sm text-end text-gray-500 mt-3 text-primary"
                    onClick={openModal}
                  >
                    Forgot password?
                  </button>
                </p>
                <Modal isOpen={isModalOpen} onClose={closeModal} />

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
              </div>
              <Button
                type="submit" text="Log in" isLoading={isLoading}
              />               
            </form>
            <p className="text-sm text-gray-500 mt-3">
              Don&apos;t have an account?{" "}
              <span>
                <Link href="/signup" className="text-primary">
                  Sign up now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
