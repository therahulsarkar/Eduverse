"use client";
import Roadmap from "@/components/Roadmap";
import MainButton from "@/components/buttons/MainButton";
import { Gradient } from "@/components/design/Hero";
import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";
import { Input, Button } from "@material-tailwind/react";
import GoBackButton from "@/components/buttons/GoBackButton";
import toast, { Toaster } from "react-hot-toast";
import savePaymentInfo from "@/utils/savePaymentInfo";
import updateUserPremium from "@/utils/updateUserPremium";
import { useRouter } from "next/navigation";
import { Alert } from "@material-tailwind/react";
import Link from "next/link";

const Premium = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [promocode, setPromocode] = React.useState("");
  const onChange = ({ target }) => setPromocode(target.value);
  const notify = () =>
    toast.success("You are now a EduVerse Premium member 💙");

  const makePayment = async (e) => {
    e.preventDefault();
    const userId = user?.uid;
    const userEmail = user?.email;
    const displayName = user?.displayName;

    if (!userId || !userEmail) {
      toast.error("Please login to continue");
      return;
    }

    try {
      let response;

      response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 199,
          name: displayName ? displayName : "User",
          email: userEmail,
          userid: userId,
        }),
      });



      const data = await response.json();

            await updateUserPremium(userId, userEmail);
            toast.success("You are now a EduVerse Premium member 💙");
            router.push("/dashboard");
    } catch (error) {
      toast.error("Payment failed. Please try again later.");
    }
  };

  return (
    <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      {/* <Toaster position="top-right" /> */}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center ">
          <p className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600">
            <span className="me-2 inline-block text-white text-sm">
              Supercharge you preparation with
            </span>
          </p>
        </div>
        <div className="max-w-3xl text-center mx-auto mt-10">
          <h1 className="block font-bold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            EduVerse{" "}
            <span className="bg-clip-text font-semibold bg-gradient-to-b from-blue-300 to-blue-700 text-transparent">
              Premium
            </span>
          </h1>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center max-w-4xl sm:max-w-2xl text-slate-300">
            Upgrade to Premium and supercharge your preparation. Unlock a wealth
            of resources tailored to elevate your exam readiness.
          </p>
        </div>

        <section className=" flex flex-col sm:flex-row justify-around mt-10">
          <Steps />
          <div className="flex justify-around shadow rounded-lg shadow-blue-700 p-4 sm:px-12">
            {user ? (
              <div className="flex flex-col justify-center">
                {/* <p className="text-white text-center my-3">Have a promocode?</p>
                <div className="relative flex w-full max-w-[30rem]">
                  <Input
                    type="text"
                    label="Promo Code"
                    value={promocode}
                    onChange={onChange}
                    className="pr-20 text-white"
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                  <Button
                    size="sm"
                    color={promocode ? "blue" : "blue-gray"}
                    disabled={!promocode}
                    className="!absolute right-1 top-1 rounded"
                  >
                    Apply
                  </Button>
                </div> */}
                {user?.isPremium ? (
                  <h1 className="text-white">
                    You are already a Premium Member!
                  </h1>
                ) : (
                  <>
                    <div className="w-full mt-4 max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
                      <div className="p-6    rounded-md w-full group transition-all duration-500 hover:border-gray-400 ">
                        <h2 className=" font-medium text-xl leading-10 text-blue-500 pb-2 ">
                          Order Summary
                        </h2>
                        <div className="data py-3 border-b border-gray-200">
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <p className="font-normal text-md leading-8 text-gray-300 transition-all duration-500 group-hover:text-gray-700">
                              EduVerse Premium:
                            </p>
                            <p className="font-medium text-md leading-8 text-gray-200">
                              ₹ 499.00
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-4 ">
                            <p className="font-normal text-md leading-8 text-gray-200 transition-all duration-500 group-hover:text-gray-700 ">
                              Coupon Code:
                            </p>
                            <p className="font-medium text-md leading-8 text-gray-200">
                              ₹ 0
                            </p>
                          </div>
                        </div>
                        <div className="total flex items-center justify-between pt-6">
                          <p className="font-normal text-md leading-8 text-white ">
                            Subtotal
                          </p>
                          <h5 className=" font-bold text-xl leading-9 textGrad">
                            ₹ 499.00
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                      <button
                        onClick={makePayment}
                        className="inline-flex w-full justify-center items-center gap-x-2 text-center hover:gap-x-3 transition-all duration-300 shadow-lg  border border-transparent  text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-2 sm:py-3 px-3 sm:px-6   bg-gradient-to-tl from-blue-600 to-violet-600  hover:shadow-blue-700/80 focus:ring-blue-600 text-white"
                        role="button"
                      >
                        {" "}
                        Pay 199{" "}
                      </button>
                    </div>{" "}
                  </>
                )}
              </div>
            ) : (
              <div className="flex justify-center flex-col">
                <p className="text-white my-4">
                  You have to login before proceeding further
                </p>
                <MainButton name="Sign in" url={"/auth/signin"} />
              </div>
            )}
          </div>
        </section>

        {/*<Roadmap />*/}
       
      </div>
      <GoBackButton />
    </section>
  );
};

export default Premium;

const Steps = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ul
          aria-label="Activity feed"
          role="feed"
          className="relative flex flex-col gap-12 py-12 pl-8  "
        >
          <li role="article" className="relative pl-8 ">
            <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-black text-slate-700 ring-2 ring-blue-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="w-5 h-5"
                role="presentation"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
            </span>
            <div className="flex flex-col flex-1 gap-0">
              <p className="text-sm text-blue-500">Step 1</p>
              <h4 className="text-base font-medium text-slate-200">
                {" "}
                Login to your Account{" "}
              </h4>
            </div>
          </li>
          {/*<li role="article" className="relative pl-8 ">
            <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-black text-slate-700 ring-2 ring-blue-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="w-5 h-5"
                role="presentation"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <div className="flex flex-col flex-1 gap-0">
              <p className="text-sm text-blue-500">Step 2</p>
              <h4 className="text-base font-medium text-slate-200">
                {" "}
                Apply coupon code (If you have any)
              </h4>
            </div>
          </li>*/}
          <li role="article" className="relative pl-8 ">
            <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-black text-slate-700 ring-2 ring-blue-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#fff" d="M12 .5v3.414h-2V.5zM5 3.085l2.414 2.414L6 6.913L3.586 4.5zm13.414 1.414L16 6.913L14.586 5.5L17 3.085zM11 6.81a.756.756 0 0 0-.756.756v10.031l-4.498-1l-.1.151l3.424 4.456a.757.757 0 0 0 .6.295h7.086a.757.757 0 0 0 .718-.517l1.782-5.35a.757.757 0 0 0-.336-.894l-3.625-2.115a.757.757 0 0 0-.381-.103h-3.159V7.566A.756.756 0 0 0 11 6.81m-2.756.756a2.756 2.756 0 0 1 5.511 0v2.954h1.159c.488 0 .968.13 1.39.375l3.624 2.116a2.757 2.757 0 0 1 1.226 3.252l-1.783 5.35a2.757 2.757 0 0 1-2.615 1.886H9.67a2.757 2.757 0 0 1-2.185-1.076L3.187 16.83l.94-1.412a1.878 1.878 0 0 1 1.972-.792l2.145.477z"></path></svg>
            </span>
            <div className="flex flex-col flex-1 gap-0">
              <p className="text-sm text-blue-500">Step 2</p>
              <h4 className="text-base font-medium text-slate-200">
                {" "}
                Click on the checkout button{" "}
              </h4>
            </div>
          </li>
          <li role="article" className="relative pl-8 ">
            <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-black text-slate-700 ring-2 ring-blue-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2"></path><rect width="3.5" height="2.5" x="10" y="7.5" rx=".5"></rect></g></svg>
            </span>
            <div className="flex flex-col flex-1 gap-0">
              <p className="text-sm text-blue-500">Step 3</p>
              <h4 className="text-base font-medium text-slate-200">
                {" "}
                Complete Payment{" "}
              </h4>
            </div>
          </li>
          <li role="article" className="relative pl-8 ">
            <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-black text-slate-700 ring-2 ring-blue-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="w-5 h-5"
                role="presentation"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </span>
            <div className="flex flex-col flex-1 gap-0">
              <p className="text-sm text-blue-500">Step 4</p>
              <h4 className="text-base font-medium text-slate-200">
                {" "}
                Enjoy your premium access{" "}
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

