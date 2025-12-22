import Image from "next/image";

export default function BookSection() {
  return (
    <div className="section-container">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-md-0">
            <h3 className="highlight-title text-warning mb-2">THE LAST OUTCAST</h3>
            <div className="w-24 h-1 bg-yellow-500 mb-4 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <p>
              Who is the Last Outcast?
              <br />
              What is the mystery of iniquity?
              <br />
              Who is the Antichrist?
              <br />
              What is the religion of the Antichrist?
              <br />
              How will the Antichrist enter our world?
              <br />
              <br />
              Discover the answers in the prophetic novel
              <span className="fw-bold text-warning"> THE LAST OUTCAST</span>.
            </p>

            <Image
              src="/assets/images/book.png"
              alt="The Last Outcast Book"
              width={300}
              height={400}
              className="book-img"
            />
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="row mb-2">
              <div className="col-md-4 text-warning ">{/* <hr /> */}</div>
              <div className="right-border-title col-md-4 fs-3 text-warning text-center">
                Huperballó Megethos
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
              </div>
              <div className="col-md-4   text-warning">{/* <hr /> */}</div>
            </div>

            <div className="row align-items-start">
              <div className="col-sm-5">
                <Image
                  src="/assets/images/pastor.jpg"
                  alt="Rev. Chris Okotie"
                  width={200}
                  height={250}
                  className="profile-img mb-3 border rounded"
                />
                <div className="author-info  fw-semibold">
                  Rev. Chris Okotie
                </div>
                <div className="author-subtitle  fw-semibold">
                  Pastor, Household of God Church
                </div>
              </div>

              <div className="col-sm-7">
                <p className="italic">
                  “And what is the exceeding greatness of His power to us who
                  believe, according to the working of His mighty power, which
                  He wrought in Christ, when He raised Him from the dead and set
                  Him at His own right hand in the heavenly places—far above all
                  principality, power, might, and dominion.”
                  <br />
                  <br />
                  This profound revelation of divine authority and spiritual
                  dominion forms the foundation of the message woven throughout
            ARRA      <span className="fw-bold"> THE LAST OUTCAST</span>.
                </p>

                <button className="btn btn-seemore">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
