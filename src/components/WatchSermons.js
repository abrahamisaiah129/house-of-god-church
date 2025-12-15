import Image from "next/image";
import Link from "next/link";

export default function WatchSermons() {
  const sermons = [
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
    {
      title: "Christian Cults Revisited",
      pastor: "Rev. Chris Okotie",
      date: "October 20, 2025",
      thumbnail: "/assets/images/Rectangle 4.png",
    },
    {
      title: "The Mystery of Iniquity",
      pastor: "Rev. Chris Okotie",
      date: "September 15, 2025",
      thumbnail: "/assets/images/ca1.png",
    },
    // Add more as needed – these are inspired by Rev. Okotie's known teachings
  ];

  return (
    <section className="watch-sermon py-16  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-(--color-dark)">
          WATCH SERMONS
        </h2>

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
                  {/* uncomment this to add a play icon overlay
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <i className="fas fa-play-circle text-(--color-primary) text-6xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div> */}
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
          <a
            href="#"
            className=" text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
          >
            3
          </a>
          <span className="text-gray-600">...</span>
          <a
            href="#"
            className=" text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
          >
            14
          </a>
          <a
            href="#"
            className=" text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
          >
            15
          </a>
          <a
            href="#"
            className=" text-decoration-none w-12 h-12 flex items-center justify-center rounded-full bg-(--color-dark) text-white hover:bg-(--color-primary) hover:text-(--color-dark) transition-all"
          >
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
