"use client";

import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function AboutChurchPage() {
  // Combined all text from your slides into one place
  const churchContent = [
    `The young ministry had its inaugural Sunday morning service on the 1st of February, 1987 in his living room, then in the Ikeja area of Lagos state. As membership of the young but peculiar church grew into the hundreds and thousands, the surrounding grounds of his house became sitting area for the overspill from the living room.`,
    `The ministry of the church and the person of Reverend Chris Okotie as a minister of the gospel became nationally recognized when the Lord Jesus Christ inspired the inauguration of the GRACE PROGRAMME and the television ministry, APOKALUPSIS.`,
    `The charity driven GRACE programme was instituted in 1990 and has become a major benevolence channel of the ministry on an annual basis.`,
    `The objective of the programme as directed by the Lord Jesus is to extend the arm of care and sharing to the less privileged in the society through recognized non governmental organizations who deal directly with such people.`,
    `In 1996 the KARIS AWARD was instituted and subsumed into the GRACE programme to appreciate Nigerians who positively impacted the nation but were not recognized by government.`,
    `The award continues to honor unsung heroes while the GRACE programme supports various charity organizations annually.`,
  ];

  return (
    <div className="w-full text-gray-900">
      <ChurchHero title="About Our Church" />

      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Main Title under Banner */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10! text-center">
          ABOUT OUR CHURCH
        </h2>

        {/* Flex Container: Image (40%) and Text (60%) */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* IMAGE SECTION - 40% Width on Large Screens */}

          {/* <h3 className="text-2xl font-bold mb-2">Our Church History</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Household of God Church, Lagos, Nigeria
            </p> */}
          <div className="w-full relative rounded-xl overflow-hidden shadow-lg leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1  ">
            <Image
              src="/assets/images/Rectangle 4.png" // Using your first image as the primary visual
              alt="Church History"
              className="w-full h-auto object-cover"
              width={500}
              height={400}
              priority
            />
          </div>

          {/* TEXT SECTION - 60% Width on Large Screens */}
          <div className="bg-white sm:col-span-3 border-l-4 border-[#ffd700] shadow-lg rounded-2xl p-8 md:p-10 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
            {churchContent.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-gray-700 mb-6 text-justify"
                style={{ fontWeight: 500 }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          {/* <div className="w-full lg:w-[60%] bg-white p-2 md:p-6">
            <div className="space-y-8">
              {churchContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium text-justify"
                  style={{ fontWeight: 500 }} // This provides that "light boldness" (Medium)
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
