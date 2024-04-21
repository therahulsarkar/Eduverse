'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { signIn, googleSignIn } from '@/firebase/auth';

import toast, { Toaster } from "react-hot-toast";

import Link from "next/link";
import Image from "next/image";
import { auth } from "@/assets";

const SignIn = () => {
  //Toast message functions
  // const notify = (msg) => toast.error(msg);
  // const notifySuccess = (msg) => toast.success(msg);

  //States for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // States for form error
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  // Loading state
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //Set form data based on user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "", // Reset the error message when the input value changes
    });
  };

  //Function to check form validation
  const validateForm = () => {
    const errors = {};
    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(formData.password)) {
      errors.password =
        "Password must contain at least 6 characters, including a capital letter and a number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit funtion
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      const { email, password } = formData;
      const { result, error } = await signIn(email, password); //Calling the signin function
      if (error) {
        toast.error("Login failed, Please try again");
        setLoading(false);
        return;
      } else {
        // console.log('Login result', result);
        toast.success("Your login was successful!");
        setLoading(false);
         router.push("/dashboard");
         return;
      }
    } else{
      setLoading(false);
    }
  };

  // Handle google sign in
  const googleClick = async (e) => {
    e.preventDefault();
    try {
      const { result, error, alreadyExist } = await googleSignIn('login');
      if (error) {
        toast.error("Login failed, Please try again");
        return;
      }else if(!alreadyExist){
        toast.error("The account does not exist! Please Sign Up first.");
        return;
      } 
      else {
        toast.success("Congratulations! 🎉 Your login was successful");
        return router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Login failed, Please try again");
      return;  
    }
  };
  

  return (
    <section
      className="bg-cover pt-6 bg-no-repeat  bg-center w-full h-full"
    >
     
      {/* <Toaster position="top-center" /> */}

      <div className="container px-5 mx-auto py-10 flex justify-center">
        <div className="max-w-xl mt-0 mb-10 xl:px-8 pt-0 sm:pt-12">
          <div className="rounded-xl shadow-3 p-7 sm:p-10 bg-white">
            <h3 className="mb-2 text-2xl font-semibold text-center sm:mb-2 sm:text-2xl text-gray-600">
              Sign In
            </h3>
            <p className="text-sm mb-6 text-gray-600 sm:text-sm flex justify-center">
              Don&apos;t have an account?
              <span className="text-blue-700 ml-2">
                <Link href="/auth/signup"> Sign Up</Link>
              </span>
            </p>

            <div className="w-full flex justify-center items-center">
            <Image src={auth} width={150}/>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="inline-flex flex-row gap-2  my-2 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>Email Address<span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={`flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } rounded shadow-sm appearance-none focus:border-sky-500 focus:outline-none focus:shadow-outline`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs">{formErrors.email}</p>
                )}
              </div>

              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="inline-flex flex-row gap-2 my-2 font-medium"
                ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2m0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18"/><circle cx="22" cy="10" r="2" fill="currentColor"/></svg>
                  Password<span className="text-sky-400">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  required
                  className={`flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  } rounded shadow-sm appearance-none focus:border-sky-500 focus:outline-none focus:shadow-outline`}
                />
                {formErrors.password && (
                  <p className=" text-xs text-red-500">{formErrors.password}</p>
                )}
              </div>

              <div className="my-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full transition justify-center items-center gap-x-2 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded focus:outline-none focus:ring-1  py-2 sm:py-3 px-3 sm:px"

                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>

              <div className="flex items-center">
                <hr className="flex-grow border-t-2 border-gray-400" />
                <p className="text-gray-400 text-xs px-2">OR</p>
                <hr className="flex-grow border-t-2 border-gray-400" />
              </div>

              <div className="my-4">
                <button
                  type="button"
                  className="inline-flex transition  w-full justify-center items-center gap-x-2 text-center bg-gradient-to-br from-slate-200 to-slate-300 shadow-lg shadow-transparent hover:shadow-slate-300/50 border border-transparent text-gray-700 text-sm font-medium rounded focus:outline-none focus:ring-1  py-2 sm:py-3 px-3 sm:px"
                  
                  onClick={googleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              </div>

              <p className="text-xs text-gray-600 sm:text-sm flex justify-center">
                <span className="text-indigo-400 mr-1">*</span> Fields are
                required | <span className="text-blue-700 mx-1">
                <Link href="/auth/signup"> Sign Up </Link> 
              </span>instead
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
