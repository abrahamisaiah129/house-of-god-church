"use client";

import BaseFooter from "@/components/BaseFooter";
import Image from "next/image";
import ChurchHero from "@/components/ChurchHero";

export default function ChildrenDepartmentPage() {
  return (
    <>
      <div className="w-full">
        <ChurchHero title="CHILDREN'S DEPARTMENT" />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-14 tracking-wide !bg-white border-l-4 border-r-4 border-[#ffd700] shadow-lg rounded-2xl p-3 md:p-3 w-fit !mb-6 mx-auto">
            CHILDREN'S DEPARTMENT
          </h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="flex flex-col items-center text-center sm:col-span-2">
              <h2 className="!text-2xl font-semibold mb-6">Meet Our Head of Department</h2>

              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]">
                <Image src="/assets/images/children-church-head.jpg" alt="Head of Department" fill className="object-cover object-center" priority />
              </div>

              <h2 className="!text-2xl font-semibold pt-8">Sis. Stella Ogweh</h2>

              <p className="mt-2 text-gray-700 leading-relaxed">
                (October 2011 - Till Date)
              </p>

              <a href="mailto:childrens_church@householdofgodchurch.org" className="!text-[#ffd700] mt-3 font-medium !no-underline">
                <i className="fas fa-envelope me-2"></i> childrens_church@householdofgodchurch.org
              </a>
            </div>

            <div className="bg-white border-l-4 text-justify border-[#ffd700] sm:col-span-3 shadow-lg rounded-2xl p-8 md:p-10 sm:mt-20 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              <p className="text-gray-700 text-md">
                “Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.” Mt 19:14
Jesus spoke these words when His disciples tried to turn back children who had been brought by their parents to be blessed by Him. Jesus gathered the children to Himself and used their simple trust to demonstrate what pleases God the Father. Jesus loves them and we want them to love and know Him. In The Household of God Church, Jesus is our foundation.
              </p>
              <p className="text-gray-700 text-md">
Our children’s church is therefore not a place where children are kept while adults attend service. Neither is it a place where the children learn a couple of songs and listen to bible stories to keep them busy. Our children’s church is a place where our children are taught and instructed in the word of God so they can grow up to know Him and learn how they can live to please Him.
</p>

              <p className=" text-gray-700 text-md">
                The gospel is the same no matter the age group. Therefore, our children learn the same bible truths as the adults but in smaller bits and pieces and in simpler language. It’s a complete service, going from opening prayer to praise and worship, to the word, to offering up to closing prayer and grace.
              </p>

              <p className="text-gray-700 text-md">
                The department is headed by Sis. Stella Ogweh and accommodates children from birth to fifteen (15) years. The teachers are all volunteers, and are committed members of the Household of God Church. They are people who are born again, speak in tongues, are consistent in church and have sat under the teaching of Rev. Chris Okotie for at least six (6) months. Our children’s church is helping to shape the character of our children for the future, and for us teachers, it’s a great honour to be working with these children.
              </p>
              <p className="text-gray-700 text-md">
                We count ourselves blessed and are thankful to be a part of their lives. CHILDREN’S CHURCH DEPARTMENT was formed in February 1987. We have Approximately 140 members (teachers). We meet every First Saturday of the month.

              </p>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}
