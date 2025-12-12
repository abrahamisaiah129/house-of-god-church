import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <Image 
              src="/assets/images/hog-logo.png" 
              alt="Household of God Church Logo" 
              width={120}
              height={60}
              className="d-inline-block"
            />
          </div>
          <div className="col-md-6">
            <form className="input-group" action="#" method="POST">
              <span className="input-group-text bg-white border-0 rounded-start">
                <i className="fas fa-envelope text-secondary"></i>
              </span>
              <input
                type="email"
                className="form-control border-0"
                placeholder="youremailaddress@gmail.com" 
              />
              <button className="btn btn-subscribe rounded-end bg-secondary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr style={{ color: '#ffffff' }} />
        <div className="row text-start mt-4">
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">ADDRESS</h6>
            <p>
              Plot 4 HouseHold of God Street,<br />
              Off Kudirat Abiola Way, Clay Bus-Stop,<br />
              Ikeja, Lagos - Nigeria
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">#OKOTIESLETTER</h6>
            <p>Get Okotie's Letter now for free</p>
            <button className="newsletter-btn px-4 py-2 bg-secondary rounded w-100">
              <i className="fas fa-download"></i>
            </button>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">FOLLOW US</h6>
            <p>Follow us on our social Media</p>
            <div className="social-icons">
              <a href="#" className="text-white me-3"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">INFO</h6>
            <div className="info-item mb-3">
              <Image 
                src="/assets/images/footer-hh-logo.png" 
                alt="Prayer" 
                width={40}
                height={40}
                className="me-2"
              />
              <div>
                <div>Prayer Meeting</div>
                <small>6pm - 7pm Weekdays</small>
              </div>
            </div>
            <div className="info-item mb-3">
              <Image 
                src="/assets/images/footer-hh-logo.png" 
                alt="Proclaimers" 
                width={40}
                height={40}
                className="me-2"
              />
              <div>
                <div>Proclaimers</div>
                <small>9pm Saturdays</small>
              </div>
            </div>
            <div className="info-item">
              <Image 
                src="/assets/images/ca1.png" 
                alt="Apokalupsis" 
                width={40}
                height={40}
                className="me-2"
              />
              <div>
                <div>Apokalupsis</div>
                <small>7am Sundays on Raypower 100.5fm</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}