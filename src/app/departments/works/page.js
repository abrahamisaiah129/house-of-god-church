"use client";

import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function WorksDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="WORKS DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            WORKS DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-4/5 relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/works-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Sis. Ekaete Oriowo</h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Sister Ekaete Elizabeth Oriowo is the Head of Department and has been serving from October, 2011 till date.
              </p>

              <a href="mailto:works@householdofgodchurch.org" className="text-[#ffd700]! mt-3 font-medium no-underline!">
                <i className="fas fa-envelope me-2"></i> works@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-lg">

Works Department came into existence in 1999. The department handles the cleaning of the church premises, the household of God street, the Citadel surroundings, the car park and the drainages. Our strength comes from the word of God in Ecclesiastes Chapter 9 verse 10a which says “ Whatsoever thy hand findeth to do, do it with thy might”.
              </p>

              <p className=" text-gray-700 text-lg">
                We believe, as born again Christians who have been cleansed/washed by the precious blood of the lamb, to keep our Father’s house clean and neat at all times and to trust Him, that faithfulness which is required to stewards be found in us. And all this we do because we know that this treasure is in earthen vessels that the Excellency of the power may be of God and not of us.
              </p>

              <p className=" text-gray-700 text-lg">
                The department is all about working\rendering services to the glory of God our Father. We are blessed, totally and completely and by serving in a department, we become co-laborers with our Pastor in the work of God. And we are so humbled that God found us worthy putting us in the ministry.
              </p>
              <p className=" text-gray-700 text-lg">
Approximately, we have sixty (60) members and our meeting day is every Saturday of the week by 12noon, where we hold a brief meeting for thirty (30) minutes after which we disperse to start cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}
