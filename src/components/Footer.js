export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3">Household of God Church</h5>
            <p className="text-white-50">
              A church where grace meets glory. Join us in worship and experience God's transforming power.
            </p>
            <div className="social-icons">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Sermons</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Events</a></li>
              <li><a href="#contact-section" className="text-white-50 text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="text-white-50">Subscribe to our newsletter for updates</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-subscribe" type="button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-3 border-top border-secondary">
          <p className="text-white-50 mb-0">
            © {new Date().getFullYear()} Household of God Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}