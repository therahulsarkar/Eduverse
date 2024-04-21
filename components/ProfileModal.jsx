"use client";
import React, { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ProfileModal = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const [agreed, setAgreed] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleOpen = () => setOpen(!open);
  const userId = user.uid;

   useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await extractUserData(userId);
        setUserData(data);
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const defaultUserImg =
    "https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/userImg.png?alt=media&token=c20db0b3-90a8-4962-9e64-73f0b27e9adf";

  return (
    <section>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="rounded-full flex flex-row gap-1"
        color="white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#000"
            d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
          ></path>
        </svg>
        Your Profile
      </Button>
      <Dialog
        open={open}
        size="sm"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="my-6 h-[90vh] overflow-y-scroll "
      >
        <DialogBody className="">
          <div className=" bg-white  font-pop">
            <section className="relative pt-36 pb-24">
              <div className="w-full absolute top-0 left-0 z-0 h-28 bg-gradient-to-b  from-[#3000cd] to-[#000a54]"></div>
              <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-center relative z-10 -mt-16">
                  <img
                    src={user.photoURL ? user.photoURL : defaultUserImg}
                    width={80}
                    alt="user-avatar-image"
                    className="border-4 border-solid border-white rounded-full"
                  />
                </div>
                <h3 className="text-center font-bold text-3xl leading-10 text-gray-900  ">
                  {user?.displayName}
                </h3>
                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">
                  {user?.email}
                </p>
              </div>

              <div className="  p-2 ">
                <UserStats />
              </div>
            </section>
          </div>
        </DialogBody>

        {/* <DialogFooter className="px-6">
          <Button variant="gradient"  color="black" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </section>
  );
};

export default ProfileModal;

const UserStats = () => {
  return (
    <div className="">
      <div className="grid sm:grid-cols-2  gap-4 sm:gap-6">
        <div className="flex flex-col shadow-3 rounded-xl ">
          <div className="p-4 md:p-5 flex gap-x-4">
            <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-200 rounded-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3d3d3d" d="M6.615 21q-.69 0-1.152-.462T5 19.385V4.615q0-.69.463-1.152T6.615 3H14.5L19 7.5v3.404q-.498.067-.93.304q-.433.236-.8.604l-6 5.975V21zm7.039 0v-2.21l5.333-5.307q.148-.13.307-.19t.32-.062q.165 0 .334.064t.298.193l.925.945q.123.148.188.307t.064.32t-.061.322t-.19.31L15.862 21zm5.96-4.985l.924-.955l-.925-.945l-.95.95zM14 8h4l-4-4l4 4l-4-4z"></path></svg>
            </div>

            <div className="grow">
              <div className="flex items-center gap-x-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Attempted Test
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  0
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-3 rounded-xl ">
          <div className="p-4 md:p-5 flex gap-x-4">
            <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3d3d3d" d="M15.275 12.475L11.525 8.7L14.3 5.95l-.725-.725L8.1 10.7L6.7 9.3l6.875-6.875L15.7 4.55l1.975-1.975l3.75 3.75zM6.75 21H3v-3.75l7.1-7.125l3.775 3.75z"></path></svg>
            </div>

            <div className="grow">
              <div className="flex items-center gap-x-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Total Score
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  0
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-3 rounded-xl ">
          <div className="p-4 md:p-5 flex gap-x-4">
            <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-200 rounded-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill="#3d3d3d" fillRule="evenodd" d="M10.326.28a.5.5 0 0 1 .506-.229l2.571.429a.5.5 0 0 1 .411.575l-.428 2.572a.5.5 0 0 1-.9.208l-.694-.97l-3.574 2.284a.75.75 0 0 1-.974-.144l-1.993-2.33L1.524 4.59a.75.75 0 1 1-.686-1.334l4.255-2.187a.75.75 0 0 1 .913.18L7.96 3.534l2.96-1.892l-.577-.807a.5.5 0 0 1-.017-.555M3.78 5.19L.878 6.85A.75.75 0 0 0 .5 7.5v5.75c0 .414.336.75.75.75h2.53zM5.03 14h3.668V7.188l-1.649.824l-1.648-2.884a.747.747 0 0 0-.37-.324V14Zm7.72 0H9.948V6.563l2.467-1.234A.75.75 0 0 1 13.5 6v7.25a.75.75 0 0 1-.75.75" clipRule="evenodd"></path></svg>
            </div>

            <div className="grow">
              <div className="flex items-center gap-x-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                 Performace Growth
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  0%
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-3 rounded-xl ">
          <div className="p-4 md:p-5 flex gap-x-4">
            <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-200 rounded-lg dark:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="#3d3d3d" d="M256 25c-11.594 0-23 12.8-23 31s11.406 31 23 31s23-12.8 23-31s-11.406-31-23-31m-103.951 2.975l-16.098 8.05c15.092 30.185 51.37 56.81 82.188 74.442L232.334 295H247V192h18v103h14.666l14.195-184.533c30.818-17.632 67.096-44.257 82.188-74.442l-16.098-8.05c-19.91 29.9-44.891 49.148-71.334 57.77C281.311 97.28 269.75 105 256 105s-25.31-7.72-32.617-19.256c-26.443-8.62-51.424-27.87-71.334-57.77zM169 313v96H25v78h462v-30H343V313z"></path></svg>
            </div>

            <div className="grow">
              <div className="flex items-center gap-x-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Current Rank
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                 0
                </h3>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};
