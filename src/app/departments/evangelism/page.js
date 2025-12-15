"use client";

// import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function EvangelismDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="EVANGELISM DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            EVANGELISM DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/dept-head-evangelism.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Sis. Violet Michael-Mogo</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                Sister Violet Michael-Mogo has been the H.O.D since 2008 till date.
              </p>

              <a href="mailto:evangelism@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> evangelism@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Evangelism Department was established in 2008 in accordance to the commission from our Lord and Saviour Jesus Christ in Matthew 16 verse 15, and charged with the mandate of taking the gospel to everyone in Lagos state.
On Sunday Mornings they go out to invite the new converts to church. The Department is made up of different sections that go to the hospitals, brothels, prisons and police stations to minister.
</p>

              <p className=" text-gray-700 text-md">
Tract distribution is done at offices, prisons and football grounds. Every Saturday except the last Saturday, the department meet with other workers in church to go out and share the gospel on the streets on the platform of the popular Proclaimers exercise.
 </p>

              <p className="text-gray-700 text-md">
There is a full department meeting every first Saturday of the month, to plan for the month and get feedback from the different sections. The department has on register, 200 members.
 </p>
            </div>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
