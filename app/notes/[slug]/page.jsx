"use client";
import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import notesData from "@/data/notes";
import Link from "next/link";
import AuthComponent from "@/components/ProtectedComponent/AuthComponent";
import toast, { Toaster } from "react-hot-toast";


const Notes = ({ params }) => {
  const [note, setNote] = useState(null);
  const slug = params.slug;

  const { user } = useContext(UserContext);
    const router = useRouter();
  const notify = (msg) => toast.error(msg);


  //  console.log('Ferom notas', user)

  useEffect(() => {
    const noteData = notesData.find((note) => note.route === slug);
    setNote(noteData);
    if (noteData.premium && !user.isPremium) {
      //notify('Only premium users can access this page! '); // Display a message
      router.push("/premium"); // Go back to the previous page
    }
  }, [slug,user]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <section className="m-4 p-4 sm:m-6 sm:p-6 md:m-8 md:p-8 lg:m-10 lg:p-10 xl:m-12 xl:p-12">
      {/* <Toaster position="top-center" /> */}

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <div className=" max-w-2xl text-center mx-auto relative">
          <h1 className="block font-bold text-gray-800 text-3xl md:text-5xl lg:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              {note.name}
            </span>
          </h1>
          <div className=" absolute top-0 end-0 -translate-y-12 -translate-x-42 sm:-translate-x-24">
            <svg
              className="w-12 h-auto text-orange-500"
              width="121"
              height="135"
              viewBox="0 0 121 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className=" absolute bottom-0 start-0 translate-y-10 -translate-x-8 sm:translate-x-12 ">
            <svg
              className="w-28 h-auto text-cyan-500"
              width="347"
              height="188"
              viewBox="0 0 347 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* End Title */}
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Topic
            </dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {note.name}
            </dd>
          </div>
          {/* External Links */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Note Link
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md ">
                {note?.noteUrl?.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mt-3 py-4 pl-4 pr-5  text-sm leading-6 shadow-3 rounded-md"
                  >
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          {link.name}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        href={link.url}
                        target="_blank"
                        className="font-medium text-gray-600 hover:text-green-500 flex flex-row items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.25em"
                          height="1.25em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#888888"
                            d="M6.615 21q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3h8.116L19 7.27v12.115q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h10.77q.23 0 .423-.192q.192-.193.192-.423V7.769h-3.77V4H6.616q-.23 0-.423.192Q6 4.385 6 4.615v14.77q0 .23.192.423q.193.192.423.192M12 18.212q1.367 0 2.3-1.002q.93-1.002.93-2.402V10.23h-1v4.577q0 .979-.642 1.691q-.642.713-1.588.713q-.94 0-1.586-.713q-.645-.712-.645-1.691V9.346q0-.398.246-.69q.247-.29.62-.29q.378 0 .622.29q.243.292.243.69v5.462h1V9.346q0-.8-.533-1.39q-.532-.59-1.332-.59t-1.333.59q-.533.59-.533 1.39v5.462q0 1.4.935 2.402q.934 1.002 2.296 1.002M6 4v3.77zv16z"
                          ></path>
                        </svg>
                        View
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          {/* External Links */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              External Resources
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md ">
                {note?.suggestedLinks?.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mt-3 py-4 pl-4 pr-5 rounded-md text-sm leading-6 shadow-3"
                  >
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          {link.name}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        href={link.url}
                        target="_blank"
                        className="font-medium text-gray-600 hover:text-blue-500 flex flex-row items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.25em"
                          height="1.25em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#888888"
                            d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1"
                          ></path>
                        </svg>
                        View
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          {/* Youtube Links */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Suggested Youtube Playlist
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md ">
                {note?.suggestedYoutubePlaylist?.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mt-3 py-4 pl-4 pr-5 rounded-md text-sm leading-6 shadow-3"
                  >
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          Playlist {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        href={link}
                        target="_blank"
                        className="font-medium text-gray-600 hover:text-red-500 flex flex-row items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.43em"
                          height="1em"
                          viewBox="0 0 256 180"
                        >
                          <path
                            fill="red"
                            d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                          ></path>
                          <path
                            fill="#FFF"
                            d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                          ></path>
                        </svg>
                        Watch
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default AuthComponent(Notes);
