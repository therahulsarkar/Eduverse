'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {  signIn, googleSignIn, signUp  } from '@/firebase/auth';
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { GradientLight } from "@/components/design/Benefits";
import Image from "next/image";
import { auth } from "@/assets";

const SignUp = () => {
  // const notify = (msg) => toast.error(msg);
  // const notifySuccess = (msg) => toast.success(msg);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = "Name is required";
    }

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

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setLoading(true);
  
      const { name, email, password } = formData;

      const { result, error, alreadyExist } = await signUp(email, password, name);
  
      if (alreadyExist) {
        toast.error("Account already exists. Please log in instead."); // Inform user that account already exists
        setLoading(false);
        return;
      } else if (error) {
        toast.error("Signup failed, Please try again!"); // Display specific error message
        setLoading(false);
        return;
      } else {
        toast.success("Congratulations! 🎉 Your registration was successful");
        setLoading(false);
        router.push("/dashboard");
        return
      }
    }
  };
  

  // const googleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { result, error, alreadyExist } = await googleSignIn("signup");
  //     if (error) {
  //       notify("Signup failed, Please try again");
  //       return;
  //     } else {
  //       // Get reference to the currently signed-in user
  //       const currentUser = firebase.auth().currentUser;
  
  //       // Get the credentials of the user who signed up with email/password
  //       const credential = firebase.auth.EmailAuthProvider.credential(
  //         formData.email,
  //         formData.password
  //       );
  
  //       // Link the Google Sign-In with the email/password sign-up
  //       await currentUser.linkWithCredential(credential);
  
  //       notifySuccess("Congratulations! 🎉 Your signup was successful");
  //       return router.push("/dashboard");
  //     }
  //   } catch (error) {
  //     if (error.code === 'auth/credential-already-in-use') {
  //       // The email/password sign-up method has already been linked to another account
  //       // You can merge the accounts here if you want
  //       notify("Account already exists");
  //     } else {
  //       notify("Signup failed, Please try again");
  //       return;
  //     }
  //   }
  // };

  
  const googleClick = async (e) => {
    e.preventDefault();
    try {
      const { result, error, alreadyExist } = await googleSignIn("signup");
      if (alreadyExist) {
        toast.error("Account already exists. Please log in instead."); // Inform user that account already exists
        setLoading(false);
        router.push("/dashboard");
        return;
      } else if (error) {
        toast.error("Signup failed, Please try again!"); // Display specific error message
        setLoading(false);
        return;
      } else {
        toast.success("Congratulations! 🎉 Your registration was successful");
        setLoading(false);
        router.push("/dashboard");
        return
      }
    } catch (error) {
      toast.error("Signup failed, Please try again!"); // Display specific error message
        setLoading(false);
        return;
    }
  };
  return (
    <section
      className=" bg-no-repeat bg-center w-full "
      
    >

      {/* <Toaster position="top-center" /> */}

      <div className="container px-5 mx-auto py-10 flex justify-center">
        <div className="max-w-xl mt-0 mb-10 xl:px-8 pt-0 sm:pt-12">
          <div className="rounded-xl shadow-3 p-7 sm:p-10 bg-white ">
            <h3 className="mb-6 text-2xl font-semibold text-center sm:mb-3 sm:text-2xl text-gray-600">
              Create Account
            </h3>
            

            <p className="text-xs mb-6 text-gray-600 sm:text-sm flex justify-center">
              Already have an account?{" "}
              <span className="text-blue-600 ml-2">
                <Link href="/auth/signin"> Login</Link>
              </span>
            </p>
            <div className="w-full flex justify-center items-center">
            <Image src={auth} width={150}/>

            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="inline-block mb-1 font-medium">
                  Name<span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={`flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  } rounded shadow-sm appearance-none focus:border-sky-500 focus:outline-none focus:shadow-outline`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs">{formErrors.name}</p>
                )}
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  Email Address<span className="text-sky-400">*</span>
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
                  className="inline-block mb-1 font-medium"
                >
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
                  <p className="text-red-500 text-xs">{formErrors.password}</p>
                )}
              </div>

              <div className="mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="inline-block mb-1 font-medium"
                >
                  Confirm Password<span className="text-sky-400">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  className={`flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border ${
                    formErrors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded shadow-sm appearance-none focus:border-sky-500 focus:outline-none focus:shadow-outline`}
                />
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {formErrors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="my-4 ">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full transition justify-center items-center gap-x-2 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded focus:outline-none focus:ring-1  py-2 sm:py-3 px-3 sm:px"
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>

              <div className="flex items-center">
                <hr className="flex-grow border-t-2 border-gray-400" />
                <p className="text-gray-400 text-xs px-2">OR</p>
                <hr className="flex-grow border-t-2 border-gray-400" />
              </div>

              <div className="my-4 ">
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
                  Sign up with Google
                </button>
              </div>

              <p className="text-xs text-gray-600 sm:text-sm flex justify-center">
                <span className="text-indigo-400 mr-1">*</span> Fields are
                required.
              </p>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SignUp;
