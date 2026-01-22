import Image from "next/image";
import Link from "next/link";

export default function BookSection() {
  return (
    <div className="section-container">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-5 mb-md-0">
            <h3 className="highlight-title text-warning mb-2">
              THE LAST OUTCAST
            </h3>
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
              className="book-img mx-auto mt-4"
              priority
            />
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="text-center mb-4">
              <h3 className="right-border-title fs-3 text-warning">
                Huperballó Megethos
              </h3>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            </div>

            <div className="row align-items-start justify-content-between gx-5">
              <div className="col-sm-5 text-center">
                <Image
                  src="/assets/images/pastor.jpg"
                  alt="Rev. Chris Okotie"
                  width={200}
                  height={250}
                  className="profile-img img-fluid mb-3 border rounded shadow-sm"
                />
                <div className="author-info fw-semibold">Rev. Chris Okotie</div>
                <div className="author-subtitle fw-semibold">
                  Pastor, Household of God Church
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0">
                <p className="fst-italic">
                  “And what is the exceeding greatness of His power to us who
                  believe, according to the working of His mighty power, which
                  He wrought in Christ, when He raised Him from the dead and set
                  Him at His own right hand in the heavenly places—far above all
                  principality, power, might, and dominion.”
                  <br />
                  <br />
                  This profound revelation of divine authority and spiritual
                  dominion forms the foundation of the message woven throughout
                  <span className="fw-bold text-warning">
                    {" "}
                    THE LAST OUTCAST
                  </span>
                  .
                </p>

                <Link href="#" className="btn btn-seemore mt-3">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
