"use client";

import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function TechnicalCrewPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="TECHNICAL CREW" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            TECHNICAL CREW
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/technical-crew-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Pat Otuechere Obakude</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
               Pat Otuechere-Obakude is the head of department (HOD), and has led the department since 2011.
              </p>

              <a href="mailto:technical_crew@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> technical_crew@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Technical Crew as it’s fondly called was one of the first few departments to be established shortly after the founding of the Church in 1987. The department was established in 1988 for the purpose of installing and maintaining light fittings as well as other electrical and electronic fittings like Air-conditioners, musical equipment, generators, etc in the church. At the turn of the millennium in year 2000, the functions of the department was further expanded to include the church annual Christmas decorations involving wholesale lighting decoration of all trees in and around the church premises, the fence and the entire street of the Household of God Church.
</p>

              <p className=" text-gray-700 text-md">
 This annual church event serves to physically demonstrate to the world, that Jesus Christ is the Light of the World.The department presently has 35 members who meet every second Saturday at 1.00pm to pray, worship and join faith with members on personal issues of life. They also meet regularly to carry out maintenance works in the church as the need arises. 
  </p>

              <p className="text-gray-700 text-md">
The annual Christmas lighting and decorations which commence by the first of October every year practically take all of the time of members as we have to be in church all day, every day to ensure the December first deadline for ‘lights-on’ is met.Pat Otuechere-Obakude as the head of department (HOD), has led the department since 2011 with grace, purposeful leadership and great understanding of member’s individuality that pulls together to deliver on the goals and objectives for which the department was established for.We pray for the Lord’s divine enablement, strength and wisdom to do that which He has called us to do in his vineyard. As we light up and decorate His house, He will decorate and help our lives to shine for the world to see and glorify His Name. He promised, He will not forget our labour of Love
 </p>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}
