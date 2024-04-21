"use client";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useRouter } from "next/navigation";
import { logo } from "../assets";
import { navigation } from "../constants";
import Image from "next/image";
import hamburgerMenu from "@/assets/main/hamburgerMenu.png";
import crossIcon from "@/assets/main/crossIcon.svg";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import MainButton from "./buttons/MainButton";
import { logout } from "@/firebase/auth";
import { Menu, Transition } from "@headlessui/react";
import { Fragment,  useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";

const Header = () => {

  const router = useRouter();
  const pathname = router.pathname;

  const [openNavigation, setOpenNavigation] = useState(false);
  const { user } = useContext(UserContext);

  const defaultUserImg =
    "https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/userImg.png?alt=media&token=c20db0b3-90a8-4962-9e64-73f0b27e9adf";


  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed shadow-sm top-0 left-0 w-full z-50   bg-white/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-white" : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between font-pop items-center py-2 sm:py-4 px-2 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block text-2xl font-bold w-[12rem] xl:mr-8" href="/">
          <Image src={logo} width={100} height={30} alt="EduVerse" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0  right-0 bottom-0  bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-left sm:items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative  text-2xl sm:uppercase my-2 sm:my-0 transition-colors hover:text-orange-600 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-0  lg:-mr-0.25 lg:text-xs  ${
                  item.url === pathname?.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-black"
                } lg:leading-5 lg:hover:text-orange-600 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex flex-row gap-2">
          {!user ? (
            <MainButton name={"Sign In"} url={"/auth/signin"} isBlue={true} />
          ) : (
            <div className="flex items-center  justify-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center ">
                    <Avatar
                      src={user.photoURL ? user.photoURL : defaultUserImg}
                      alt="avatar"
                      withBorder={true}
                      className="p-1 "
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1">
                      {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Profile
                  </button>
                )}
              </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push("/dashboard")}
                            className={`${
                              active
                                ? "bg-gray-200"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <DeleteInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <DeleteInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Dashboard
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logout}
                            className={`${
                              active
                                ? "bg-gray-200"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                               <MoveInactiveIcon
                               className="mr-2 h-5 w-5"
                               aria-hidden="true"
                             />
                           ) : (
                             <MoveInactiveIcon
                               className="mr-2 h-5 w-5"
                               aria-hidden="true"
                             />
                            )}
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}

          <button
            className="ml-auto lg:hidden"
            px="px-2"
            onClick={toggleNavigation}
          >
            {/* <MenuSvg openNavigation={openNavigation} /> */}
            {openNavigation ? (
              <div className="bg-slate-200 p-0.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z" clip-rule="evenodd"/></svg>
              </div>
            ) : (
              <div className="bg-slate-200 p-0.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#888888" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#888888" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#888888" strokeWidth="2" />
    </svg>
  );
}



function DeleteInactiveIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="#888888" fillRule="evenodd" d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1H5.2zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04h-.05zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04m.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04h-.05zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37" clipRule="evenodd"></path></svg>
  );
}


