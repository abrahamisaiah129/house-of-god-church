import Image from 'next/image';

export default function AboutChurch() {
  return (
    <div className="container church-section">
      {/* <div className="row align-items-stretch church-row"> */}
      {/* <div className="d-flex justify-content-evenly align-items-center">
        <div className="col-md-5 d-flex">
          <div className="w-100 h-100">
            <Image
              src="/assets/images/ca1.png"
              alt="Church Building"
              width={500}
              height={400}
              // className="church-image h-100 w-100 object-fit-cover rounded"
              className=" church-image w-full h-auto object-cover rounded"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column justify-content-center w-100">
            <h2 className="church-title">A CHURCH WHERE GRACE MEETS GLORY</h2>
            <p className="church-text">
              The young ministry had its inaugural Sunday morning service on the
              1st of February, 1987 in his living room, then in the Ikeja area
              of Lagos state. As membership of the young but peculiar church
              grew into the hundreds and thousands, the surrounding grounds of
              his house became sitting area for the overspill from the living
              room.
              <br />
              <br />
              The young ministry had its inaugural Sunday morning service on the
              1st of February, 1987 in his living room, then in the Ikeja area
              of Lagos state.
            </p>
            <div className="text-start mt-3">
              <a href="/about/church" className="btn-see-more">
                See More. . .
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* below the template to be used */}
      {/* Flex Container: Image (40%) and Text (60%) */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* IMAGE SECTION - 40% Width on Large Screens */}

        {/* <h3 className="text-2xl font-bold mb-2">Our Church History</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Household of God Church, Lagos, Nigeria
            </p> */}
        <div className="w-full col-md-5  relative rounded-xl overflow-hidden shadow-lg leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
          <Image
            src="/assets/images/ca1.png" // Using your first image as the primary visual
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
            <h2 className="church-title mb-2">A CHURCH WHERE GRACE MEETS GLORY</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-4 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <p className="church-text">
              The young ministry had its inaugural Sunday morning service on the
              1st of February, 1987 in his living room, then in the Ikeja area
              of Lagos state. As membership of the young but peculiar church
              grew into the hundreds and thousands, the surrounding grounds of
              his house became sitting area for the overspill from the living
              room.
              <br />
              <br />
              The young ministry had its inaugural Sunday morning service on the
              1st of February, 1987 in his living room, then in the Ikeja area
              of Lagos state.
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