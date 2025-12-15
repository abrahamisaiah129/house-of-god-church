"use client";

// import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function BenevolencePage() {
  return (
    <>
    <div className="w-full">
      <ChurchHero   title="BENEVOLENCE DEPARTMENT" />

      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
          BENEVOLENCE DEPARTMENT
        </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/benevolence-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Bro Mike Igbokwe</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
               The administrative Head of Department is Bro Mike Igbokwe.
              </p>

              <a href="mailto:benevolence@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> benevolence@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 border-[#ffd700] text-justify sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The BENEVOLENCE DEPARTMENT of the Household of God church was formed in 1989. The department is responsible for the welfare of the less-privileged or the needy and the poor amongst our congregation and assists them in times of their adversity in the areas of clothing, feeding, rent or rent subsidies and minor medical treatment.
It also coordinates the Church’s G.R.A.C.E. EVENT (a national event) which started in 1990 and holds on the 2nd Sunday of December, each year.
</p>

              <p className=" text-gray-700 text-md">
The department has approximately 88 members.
</p>

              <p className="text-gray-700 text-md">
Meeting days are 1ST Sunday and 2ND second Sundays of each month:
On 1ST Sundays: All members come early to church for the service on that Sunday and position themselves at strategic points in the Church’s premises and distribute the department’s envelopes to church members for the collection of monetary donations to make material provisions for the registered beneficiaries. Our members also receive food items and clothes from church members which are taken to and neatly kept in the Department’s storage room.
</p>
              <p className="text-gray-700 text-md">
2nd Sunday of each month: Benevolence Ministration takes place immediately after the service. Also the Departmental business meeting holds once a month at the Holy Ghost Room.
              </p>
              <p className="text-gray-700 text-md">
The name of the Head of benevolence department is Bro Mike Igbokwe, SAN, FCIArb. He has being serving since 1999 till date.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}

