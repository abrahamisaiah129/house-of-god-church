import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutChurch() {
  const [aboutData, setAboutData] = useState({
    maintitle: "A CHURCH WHERE GRACE MEETS GLORY",
    content:
      "The young ministry had its inaugural Sunday morning service on the 1st of February, 1987 in his living room, then in the Ikeja area of Lagos state...",
    image: "/assets/images/ca1.png",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/client/about/church`,
        );
        const result = await res.json();
        if (result.success && result.data) {
          setAboutData(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container church-section">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* IMAGE SECTION - 40% Width on Large Screens */}
        <div className="w-full col-md-5  relative rounded-xl overflow-hidden shadow-lg leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
          <Image
            src={aboutData.image || "/assets/images/ca1.png"}
            alt="Church History"
            className="w-full h-auto object-cover"
            width={500}
            height={400}
            priority
          />
        </div>

        {/* TEXT SECTION - 60% Width on Large Screens */}
        <div className="bg-white col-md-6 border-l-4 border-[#ffd700] shadow-lg rounded-2xl p-8 md:p-10 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
          <div className="d-flex flex-column justify-content-center w-100">
            <h2 className="church-title mb-2 uppercase">
              {aboutData.maintitle}
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-4 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <p className="church-text whitespace-pre-wrap">
              {aboutData.content}
            </p>
            <div className="text-start mt-3">
              <a href="/about/church" className="btn-see-more">
                See More. . .
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}