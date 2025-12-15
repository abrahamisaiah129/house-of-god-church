"use client";

// import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function VillaSanitationPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="VILLA SANITATION" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            VILLA SANITATION
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/villa-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">MRS EDNA ONOME OKE</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                The name of the H.O.D is MRS EDNA ONOME OKE and she has been serving for 17 Years
              </p>

              <a href="mailto:villa_sanitation@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> villa_sanitation@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Villa Sanitation Department was formed and inaugurated in 1998. The department is responsible for the cleaning of the Church auditorium, ensuring it is kept clean, curtains and chairs properly arranged at all times. They oversee the preparation of the Communion element and its administration both for service and weddings. They also provide toiletries for the restrooms during service.
</p>

              <p className=" text-gray-700 text-md">
The Villa Sanitation has an approximate membership of 100, both men and women. Their meeting days are; Wednesdays (6am – 9am) Fridays (4pm – 6pm) Saturdays (12noon, till the end of every Church activities) and Sundays (Only on first Sunday of every month for communion purposes)

 </p>
            </div>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
