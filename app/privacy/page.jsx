import { privacy } from "@/assets";
import GoBackButton from "@/components/buttons/GoBackButton";
import Image from "next/image";

export default function Privacy() {
  return (
    <div className="relative isolate overflow-hidden font-pop bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
         <Image src={privacy} alt="Privacy"/>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className=" text-2xl font-bold tracking-tight textGrad">
                Terms and Conditions:
              </h2>
              <p className="mt-6 flex flex-col gap-4">
                <span>
                  <span className="font-semibold text-black">
                    Acceptance of Terms:
                  </span>{" "}
                  By using EduVerse, you agree to abide by these Terms and
                  Conditions. If you do not agree with any part of these terms,
                  you may not use the Platform.
                </span>

                <span>
                  <span className="font-semibold text-black">
                    {" "}
                    User Conduct:
                  </span>{" "}
                  You agree to use the Platform solely for lawful purposes. You
                  will not engage in any activity that disrupts or interferes
                  with the functioning of the Platform or its services.
                </span>

                <span>
                  {" "}
                  <span className="font-semibold text-black">
                    Intellectual Property:
                  </span>{" "}
                  All content provided on the Platform, including but not
                  limited to notes, tests, and questions, is the intellectual
                  property of EduVerse. You may not reproduce, distribute, or
                  modify any content without prior permission.
                </span>

                <span>
                  <span className="font-semibold text-black">
                    {" "}
                    Premium Subscription:
                  </span>{" "}
                  Users may purchase a premium subscription to access premium
                  content on the Platform. Subscription fees are non-refundable.
                </span>

                <span>
                  {" "}
                  <span className="font-semibold text-black">
                    Privacy Policy:
                  </span>{" "}
                  EduVerse respects your privacy and protects your personal
                  information in accordance with our Privacy Policy. By using
                  the Platform, you consent to the collection and use of your
                  information as described in the Privacy Policy.
                </span>

                <span>
                  <span className="font-semibold text-black">Disclaimer:</span>{" "}
                  While we strive to provide accurate and up-to-date
                  information, EduVerse makes no representations or warranties
                  of any kind, express or implied, about the completeness,
                  accuracy, reliability, suitability, or availability of the
                  Platform or the information, products, services, or related
                  graphics contained on the Platform.
                </span>

                <span>
                  <span className="font-semibold text-black">
                    Limitation of Liability:
                  </span>{" "}
                  EduVerse shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of
                  profits or revenues, whether incurred directly or indirectly,
                  or any loss of data, use, goodwill, or other intangible losses
                  resulting from your access to or use of the Platform.
                </span>

                <span>
                  <span className="font-semibold text-black">
                    Modification of Terms:
                  </span>{" "}
                  EduVerse reserves the right to modify these Terms and
                  Conditions at any time without prior notice. Your continued
                  use of the Platform after any such changes constitutes your
                  acceptance of the new Terms and Conditions.
                </span>
              </p>

              {/* Cancellation and Refund Policy: */}
              <h2 className=" text-2xl font-bold tracking-tight textGrad mt-12">
              Cancellation and Refund Policy:
              </h2>
              <p className="mt-6 flex flex-col gap-4">
                <span>
                  <span className="font-semibold text-black">
                  Cancellation:
                  </span>{" "}
                  Users may cancel their premium subscription (Under certain situations) at any time by contacting EduVerse customer support.
                </span>

                <span>
                  <span className="font-semibold text-black">
                    {" "}
                    Refund Policy:
                  </span>{" "}
                  Subscription fees are non-refundable, except in cases where EduVerse fails to provide the promised services. Refund requests will be evaluated on a case-by-case basis.
                </span>

                <span>
                  {" "}
                  <span className="font-semibold text-black">
                  Termination:
                  </span>{" "}
                  EduVerse reserves the right to terminate your access to the Platform and revoke your premium subscription without prior notice if you violate these Terms and Conditions or engage in any fraudulent activity.
                </span>
              </p>

             
            </div>
          </div>
        </div>
      </div>

      <div>
        <GoBackButton/>
      </div>
    </div>
  );
}
