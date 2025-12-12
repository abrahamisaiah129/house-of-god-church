"use client";

import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function HolyPolicePage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="HOLY POLICE" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            HOLY POLICE
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/holy-police-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Bro Emeka Okoronkwo</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                The name of the head of Holy Police Department is Bro Emeka Okoronkwo and he has been serving from 2003 till date.
              </p>

              <a href="mailto:holy_police@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> holy_police@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Holy Police department was formed in 1988. The department is charged with the responsibilities of ensuring security of cars parked in the church’s car park while people worship in church. They control traffic during church activities and welcome members at the car park.
 </p>

              <p className=" text-gray-700 text-md">
The department has Approximately 20 members and they meet every last Saturday of each month.
</p>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}

