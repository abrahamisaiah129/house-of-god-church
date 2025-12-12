'use client';

import BaseFooter from '@/components/BaseFooter';
import Image from 'next/image';
import ChurchHero from "@/components/ChurchHero";
import { useState } from "react";

// ───────────────────────────────────────────
// SIMPLE CAROUSEL HOOK (NO AUTOPLAY)
// ───────────────────────────────────────────
function useCarousel(length) {
  const [index, setIndex] = useState(0);
  return { index, setIndex };
}


// ───────────────────────────────────────────
// MAIN PAGE
// ───────────────────────────────────────────
export default function AboutPastorPage() {
  const pastorSlides = [
{
  img: "/assets/images/pastor.jpg",
  text: [
    `Reverend Chris Okotie was born on the 16th of June, 1958 to the family of Francis Idje and Cecilia Okotie in Ethiope West Local Government area of Delta State, South-South Nigeria. He had his primary education between 1964 and 1970 at Kirikiri Primary School, Lagos, as his father, who was a civil servant, was stationed in Lagos at the time.`,

    `He proceeded to Edo College in Benin for his secondary education between 1971 and 1977. He obtained his 'A' Level certificate in 1978 and went on to study law at the University of Nigeria, Nsukka, in the former Anambra, now Enugu State.`,

    `His multi-talented nature was evident from his childhood and became more apparent when he became the lead singer of the Edo College school band. His exploits in music blossomed and while studying law at the University of Nigeria, Nsukka, he eventually rose to become the most celebrated Nigerian pop music star in 1980 when he released his first album, 'I Need Someone.'`,

    `At the peak of his young musical career and to the bewilderment of the show business world and the general public, in 1984, he decided to abandon his musical career and return to the university to complete his study of law. It was during this period that he had his conversion experience and became a born-again Christian, having encountered the saving grace of the Lord Jesus Christ.`,

    `He eventually earned a Bachelor's degree in Law in 1984 and proceeded to the Nigerian Law School in Lagos. In 1985, in obedience to a divine call from the Lord Jesus Christ, he left the shores of Nigeria and proceeded to Bible school in Tulsa, Oklahoma, USA, to prepare for a life of Christian ministry.`,

    `He returned to Nigeria in 1986 and, after being commissioned by the Lord Jesus Christ, launched fully into pastoral ministry with the inauguration of the HOUSEHOLD OF GOD FELLOWSHIP in 1987, which later became THE HOUSEHOLD OF GOD INTERNATIONAL MINISTRIES.`
  ]
},
{
  img: "/assets/images/pastor.jpg",
  text: [
    `The young ministry held its inaugural Sunday morning service on the 1st of February, 1987, in Reverend Chris Okotie's living room in the Ikeja area of Lagos State. As the membership of the young but peculiar church grew into the hundreds and eventually thousands, the surrounding grounds of his house became additional seating space for the overflow from the living room.`,

    `The ministry of the church and the person of Reverend Chris Okotie as a minister of the gospel became nationally recognized when the Lord Jesus Christ inspired the inauguration of the GRACE PROGRAMME and the television ministry known as APOKALUPSIS.`,

    `The charity-driven GRACE Programme was instituted in 1990 and has since become a major benevolence channel of the ministry on an annual basis. The objective of the programme, as directed by the Lord Jesus, is to extend the arm of care and sharing to the less privileged in the society through recognized non-governmental organizations who deal directly with such individuals.`,

    `In 1996, the KARIS AWARD—yet another inspiration from the Lord Jesus—was instituted and integrated into the GRACE Programme. The award is aimed at recognizing Nigerians who have positively impacted the nation but have not been acknowledged by the government.`
  ]
},
{
  img: "/assets/images/pastor.jpg",
  text: [
    `The KARIS award has been given over the years to distinguished Nigerians like Mallam Aminu Kano, Tai Solarin, Hajia Gambo Sawaba, Gen. Murtala Mohammed (posthumous), DIG Chris Omeben, Mr. Taiwo Akinkunmi, Mrs. Margaret Ekpo, Chief Michael Imuodu and many others.`,

    `The 2010 KARIS award recipient was Chief Gani Fawehinmi, SAN, who was so honoured, though posthumously, for his contributions to the practice of law and the fight for good governance and human rights in Nigeria. It is worthy of note that some of the awardees of the programme have been subsequently recognized by government at various levels.`,

    `The GRACE programme has several beneficiaries — charity organizations who have become traditional recipients of the charitable disposition of Reverend Chris Okotie and the members of the Household of God Church on an annual basis. They include the Sunshine Foundation, the Pacelli School for the Blind and Partially Sighted, The Little Saints' Orphanage, and The Spinal Cord Injuries Association of Nigeria. Each of these organizations receives five hundred thousand naira from the ministry.`,

    `The Lord Jesus Christ again inspired the television ministry of the Household of God Church, known popularly as Apokalupsis, which was instituted in 1999 to carry the message of the grace of God presented with a balanced biblical perspective beyond the walls of the local assembly to a larger audience both locally and internationally. The international audience can download messages online, and live streaming of church services is also in progress.`
  ]
},
{
  img: "/assets/images/pastor.jpg",
  text: [
    `The television ministry has received many awards including that from the Nigerian Television Authority network in the year 2002.`,

    `By 1990, the location of the church in Reverend Chris Okotie's house could no longer be sustained as membership had grown to several thousands, though two services were being held each Sunday morning.`,

    `The need for the ministry to move to a permanent location had become clear for all to see. After a prolonged search and by divine direction, a run-down factory in the Oregun area of Ikeja in Lagos was found and a lease agreement entered into with the owner.`,

    `The ministry moved in and held its first Sunday service at the newly renovated auditorium on the 19th of December, 1992. The date coincided with the day of GRACE 1992. This site and all the surrounding land in the immediate vicinity thus became a target of faith for Reverend Chris Okotie and the church members and indeed the ministry now owns a vast expanse of land in the area by the grace of the Lord Jesus Christ.`,

    `In the year 1999, Reverend Chris Okotie once again, with instructions from the Lord Jesus, left Nigeria on a retreat during which he wrote the manuscript of the iconic best-selling novel, THE LAST OUTCAST.`
  ]
},
{
  img: "/assets/images/pastor.jpg",
  text: [
    `The manuscript was subjected to intense review over a period of time and the finished book was eventually published in 2002 and received rave reviews from all quarters. The novel thus exposed another aspect of Reverend Chris Okotie's talent and the hand of the Lord Jesus upon him to the general public.`,

    `By the grace and provident disposition of the Lord Jesus Christ, the ministry right now is in the process of building a new seven-storey facility to house the Children's Church, which will be moved out of its present location as soon as the SILVER CITADEL is completed.`,

    `In November 2005, on receiving a word from the Lord Jesus, the joint celebration of birthdays by members of the church born in the same month of the year was instituted by Reverend Chris Okotie as a means of creating yet another forum for fellowship among members, aside from the several departments in the ministry, which are more administratively based.`
  ]
},
{
  img: "/assets/images/pastor.jpg",
  text: [
    `These celebrations have brought out the creativity in the people of the Household of God Church and indeed made the church a lot livelier.`,

    `In the year 2006, the Queen Esther beauty pageant was also created by Reverend Chris Okotie based on an inspiration from the Lord, to project biblical character values for women and to correct the global wrong estimation and perception of feminine beauty as that which is from the outward appearance.`,

    `The pageant involves ladies who are members of the church dressed as different female characters from the Bible, and who are then judged on their representation of such biblical characters and the creativity displayed in their costumes.`,

    `The pageant has broadened in its conceptualization with each passing year since its inception and is subsumed in the annual GRACE Programme.`,

    `The KARIS award now carries a cash prize of two million naira.`
  ]
}

  ];

  const about = useCarousel(pastorSlides.length);

  // Get current slide
  const currentSlide = pastorSlides[about.index];

  // ───────────────────────────────────────────
  // RENDER
  // ───────────────────────────────────────────
  return (
    <>
      <div className="w-full text-gray-900">
        <ChurchHero title="Our Pastor" />

        <section className="sm:max-w-[80%] mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold !mb-10 text-center">
            Meet Our Pastor
          </h2>

          <div className="relative">
            {/* Single slide display with transition */}
            <div className="grid md:grid-cols-5 gap-8 items-start transition-opacity duration-500">
              <div className=" sm:col-span-2">
                <h2 className="text-2xl font-bold pt-2">Rev Chris Okotie</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pastor, Household of God Church
                </p>
                <div className="w-full aspect-[4/5] relative rounded-xl overflow-hidden shadow-lg leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
                  <img 
                    src={currentSlide.img} 
                    alt="Pastor" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              <div className="bg-white sm:col-span-3 border-l-4 border-[#ffd700] shadow-lg rounded-2xl p-8 md:p-10 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
                {currentSlide.text.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-gray-700 mb-6 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10">
              <button
                onClick={() =>
                  about.setIndex((prev) => (prev - 1 + pastorSlides.length) % pastorSlides.length)
                }
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 transition-colors font-medium text-base touch-manipulation"
              >
                Previous
              </button>

              <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
                {pastorSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => about.setIndex(i)}
                    className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all touch-manipulation ${
                      about.index === i
                        ? "bg-gray-900 text-white scale-110"
                        : "bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  about.setIndex((prev) => (prev + 1) % pastorSlides.length)
                }
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 transition-colors font-medium text-base touch-manipulation"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>

      <BaseFooter />
    </>
  );
}