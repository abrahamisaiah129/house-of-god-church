"use client";

import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function PublicationDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="PUBLICATION DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            PUBLICATION DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/pastor.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Sis. Ebele Iyayi</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                
The Head of the Department is Sister Ebele Iyayi, who has been serving as the HOD of the Department since 2004.
              </p>

              <a href="mailto:publication@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> publication@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Publications Department was formed in 1998 and its duty was primarily to transcribe church sermons from audio to text and edit them for publications such as books or articles, as directed by the Pastor. The Department is also responsible for giving titles to church sermons and production of the “Householder” magazine.
              </p>

              <p className=" text-gray-700 text-md">
                The approximate size of the department is 40 members; both male and female. They hold a general/prayer & fasting meeting every second Saturday of each month. A “thoughtfulness” gathering is organised quarterly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}
