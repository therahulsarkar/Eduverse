import { omrsheet } from "@/assets";
import GoBackButton from "@/components/buttons/GoBackButton";
import HeadingText from "@/components/design/HeadingText";
import syllabusLink from "@/data/syllabus";
import Image from "next/image";
import Link from "next/link";

const Omr = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
     <HeadingText title={"OMR Sheet"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="group flex flex-col h-full bg-white border border-gray-200 shadow-2 rounded-xl overflow-hidden"
          >
            <div className="h-52 flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-green-900 rounded-t-xl">
              <Image src={omrsheet} height={200} width={200} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-medium text-gray-800 ">
               Download sample OMR sheet
              </h3>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 ">
              <Link
                href={syllabusLink[1].url}
                target="_blank"
                className="w-full overflow-hidden py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium  bg-white text-gray-800 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none "
              >
                Download
              </Link>
            </div>
          </div>
      
      </div>
      <GoBackButton/>
    </div>
  );
};

export default Omr;
