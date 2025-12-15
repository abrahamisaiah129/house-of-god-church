"use client";

// import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function ProtocolDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="PROTOCOL DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            PROTOCOL DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/pastor.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Bro Henry Esonu</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                The Protocol Department is headed by Bro Henry Esonu and he has been serving as the HOD from inception till date.
              </p>

              <a href="mailto:protocol@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> protocol@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Protocol Department of the Household of God church was established in 2011. They are duly assigned to handle all the logistics and travels for the pastor and other contingent of the ministry globally. They ensure orderliness and coordination at all times during the church service and other programmes in church. They are in charge of security frisking during church services and maintenance of order inside the auditorium during church services. </p>

              <p className=" text-gray-700 text-md">
The protocol department has an approximate membership of 40, both male and female inclusive who meet every last Saturday of the month. </p>

            </div>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
