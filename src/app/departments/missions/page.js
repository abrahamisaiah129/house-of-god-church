"use client";

// import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function MissionsDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="MISSIONS DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            MISSIONS DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/pastor.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Bro ‘Lolu Ogunmade</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                Brother ‘Lolu Ogunmade is the head of department of the Missions department and has been in service since the department was inaugurated.
              </p>

              <a href="mailto:missions@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> missions@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Missions Department was founded in March 2008 and was inaugurated in July of the same year.
 </p>

              <p className=" text-gray-700 text-md">
The responsibility of the department is to extend the reach of the ministry of The Household of God Church beyond our immediate and surrounding community. We are engaged with taking the evangelical message of the ministry far and wide following the direction of the Holy Spirit and the guidance of the pastoral office. The current standing members number about thirty five (35) men and women.
 </p>

              <p className="text-gray-700 text-md">
The Missions department meets every Saturday of each month with the exception of environmental sanitation weekends.
</p>
            </div>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
