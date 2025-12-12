import Image from 'next/image';

export default function BookSection() {
  return (
    <div className="section-container">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-md-0">
            <h3 className="highlight-title">THE LAST OUTCAST</h3>
            <p>
              Who is the Last Outcast? | What is the mystery of iniquity?<br />
              Who is the antichrist? | What is the religion of the antichrist?<br />
              How will the antichrist enter our world?<br />
              Find out in <span className="fw-bold">THE LAST OUTCAST</span>
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
              <div className="col-md-4">
                <hr />
              </div>
              <div className="right-border-title col-md-4">Huperballó Megethos</div>
              <div className="col-md-4">
                <hr />
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-sm-5">
                <Image 
                  src="/assets/images/pastor.jpg" 
                  alt="Rev. Chris Okotie" 
                  width={200}
                  height={250}
                  className="profile-img mb-3"
                />
                <div className="author-info">Rev. Chris Okotie</div>
                <div className="author-subtitle">Pastor, Household of God Church</div>
              </div>
              <div className="col-sm-7">
                <p>
                  And what is the exceeding greatness of his power to us-ward who believe,
                  according to the working of his mighty power, Which he wrought in Christ,
                  when he raised him from the dead, and set him at his own right hand in the
                  heavenly places, Far above all principality, and power, and might, and dominion
                  at his own right hand in the <br /><br />
                  heavenly places, Far above all principality, and power, and might, and dominion...
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