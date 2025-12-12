"use client";

import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function PastoralCarePage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="PASTORAL CARE" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide">
            PASTORAL CARE
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/pastoral-care-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="text-2xl font-semibold pt-8">Miss Ogorchukwu Ogweh</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                The administrative Head of Department is Miss Ogorchukwu Ogweh.
              </p>

              <a href="mailto:pastoral_care@householdofgodchurch.org ogorogweh@gmail.com" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> pastoral_care@householdofgodchurch.org, ogorogweh@gmail.com
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
The Pastoral Care Department was set up in 1998 from the various Church units that had closely worked with the Pastor. It is structured to meet the needs of the brethren and ensure the proper organization of the specific arms of the ministry. It comes directly under the office of the Pastor of the Church, Rev. Chris Okotie.
There are 4 core units which make up the department:</p>

              <p className=" text-gray-700 text-md">
VISITATION
Visitation section is simply VISITATION: To establish PERSONAL CONTACT with members of the local Church. The team relies on requests from needy members and information offered by friends and family who need the attention of the team for fellowship encouragement and prayer support, through the ‘I Care‘ cards. </p>

              <p className="text-gray-700 text-md">
PRAISE & WORSHIP TEAM
This section leads the congregation in Praise and Worship to God and our Lord Jesus Christ during services (Sundays and Wednesdays), and during functions like weddings and the Church’s annual GRACE Programme.
</p>
              <p className="text-gray-700 text-md">
AUDIO/VIDEO CREW SECTION
The Audio-Visual Section comprises of the audio-visual crew and the tape ministry. It is responsible for the recording of the Church’s sermons on both audio and video and Church’s audio and video equipment’s for ensuring audibility of the sermon, praise and worship as well as the visual display of activities and lyrics of songs.
              </p>
              <p className="text-gray-700 text-md">
CHRISTIAN PARENTING CLASS
The Christian Parenting Class ministers Biblical principles of good parenting and child upbringing to married couples either believing God for the fruit of the womb or already expectant parents. It also offers physical fitness regimen to help ensure that expectant mothers are fit and strong throughout the duration of their pregnancy.
The department which has over 50 listed members meets twice a month: first and third Saturdays, from 12 noon on the Church premises
The administrative Head of Department is Miss Ogorchukwu Ogweh. She joined The Household of God International Church on February 1, 1988. She has been a volunteer Church worker for 27 years, out of which time she has led the Pastoral Care Department for 16 years.
</p>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}
