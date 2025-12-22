"use client";

// import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function SinglesDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="SINGLES DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            SINGLES DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-4/5 relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/singles-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Bro Mike Mogo</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                The Department was formed in 1987, shortly after the inception of the church and the Head of Singles Department is Bro Mike Mogo.
              </p>

              <a href="mailto:singles@householdofgodchurch.org" className="text-[#ffd700]! mt-3 font-medium no-underline!">
                <i className="fas fa-envelope me-2"></i> singles@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The singles fellowship is a department within the Household of God structure and a veritable channel for singles to maximize their potentials as peculiar single people in Nigeria.
              </p>

              <p className=" text-gray-700 text-md">
                Membership is open to church members who are not married and are above 18years. No further qualifications are needed, widows and widowers are welcome. They hold meetings mostly at preannounced weekends for specific programs which provide entertainment, sporting activities and sometimes relevant relationship information peculiar to singles. Through these programs on relationship, brothers and sisters relationships within a household is extended and reinforced beyond the formality of regular church service.
              </p>

              <p className="text-gray-700 text-md">
                Past programmes include Village Forum, Battle of the Sexes, Household Olympics, Boat Cruises and Parties. Our vision is to maximize our potentials and underlying operational principles are creativity, decency, and orderliness based exclusively on the word of God.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
