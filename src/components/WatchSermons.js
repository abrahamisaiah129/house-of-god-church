import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSermons } from "@/lib/api";

export default function WatchSermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await getSermons();
        if (response.data && response.data.length > 0) {
          const formattedSermons = response.data.map((s) => ({
            title: s.title,
            pastor: s.pastor || "Rev. Chris Okotie",
            date: new Date(s.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            thumbnail: s.image || s.mediaUrl || "/assets/images/ca1.png", // Fallback
          }));
          setSermons(formattedSermons);
        } else {
          setSermons([
            // Fallback mock if API empty
            {
              title: "Understanding Apokalupsis",
              pastor: "Rev. Chris Okotie",
              date: "December 8, 2025",
              thumbnail: "/assets/images/ca1.png",
            },
            {
              title: "The Rapture and End Times",
              pastor: "Rev. Chris Okotie",
              date: "November 24, 2025",
              thumbnail: "/assets/images/ca3.png",
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch sermons:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSermons();
  }, []);

  return (
    <section className="watch-sermon py-16  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-(--color-dark)">
          WATCH SERMONS
        </h2>

        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sermons.map((sermon, index) => (
                <Link
                  href="/sermons/example"
                  key={index}
                  className=" text-decoration-none group block"
                >
                  <div className="sermon-card bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        width={400}
                        height={300}
                        className="w-full h-64 
                            object-cover
                            transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h5 className="text-xl font-bold text-(--color-dark) group-hover:text-(--color-primary) transition-colors">
                          {sermon.title}
                        </h5>
                        <p className="text-gray-600">{sermon.pastor}</p>
                      </div>

                      <div className="flex justify-between items-center mt-6 text-sm">
                        <div className="flex items-center text-gray-500">
                          <i className="fas fa-calendar-alt text-(--color-primary) mr-2"></i>
                          <span>{sermon.date}</span>
                        </div>
                        <div className="flex gap-4">
                          <button
                            aria-label="Bookmark"
                            className="text-gray-500 hover:text-(--color-primary) transition-colors"
                          >
                            <i className="far fa-bookmark"></i>
                          </button>
                          <button
                            aria-label="Share"
                            className="text-gray-500 hover:text-(--color-primary) transition-colors"
                          >
                            <i className="fas fa-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination – matches your full page style */}
            <div className="pagination flex text-decoration-none justify-center items-center gap-3 mt-16">
              <a
                href="#"
                className=" text-decoration-none  text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
              >
                <i className="fas fa-chevron-left"></i>
              </a>
              <a
                href="#"
                className=" text-decoration-none active  w-12 h-12 flex items-center justify-center rounded-full bg-(--color-primary) text-(--color-dark) font-bold"
              >
                1
              </a>
              <a
                href="#"
                className=" text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
              >
                2
              </a>
              {/* Simplified pagination for demo */}
              <span className="text-gray-600">...</span>
              <a
                href="#"
                className=" text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
              >
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
