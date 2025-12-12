import Image from 'next/image'
import "@/styles/globals.css";
import { Inter } from 'next/font/google';

// Load Inter font only for this page
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});


export default function ComingSoonPage() {
  return (
    <div className={`coming-soon-page ${inter.variable}`}>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Main card container for the coming soon page */}
            <div className="card p-1 shadow-lg border-0 rounded-2">
              <div className="card-body bg-black text-center">
                {/* the logo */}
                <Image 
                  src="/assets/images/hog-logo.png" 
                  alt="House of God Church Logo" 
                  className="mb-4 mx-auto"
                  width={150}
                  height={150}
                  style={{ maxWidth: '150px', height: 'auto' }}
                  priority
                />
                
                {/* Church Name Heading */}
                <h1 className="card-title text-warning fw-bolder mb-3">
                  Household of God Church
                </h1>

                {/* Main &apos;Coming Soon&apos; message */}
                <h2 className="card-subtitle h4 text-light mb-4">
                  Our new website is coming soon!
                </h2>

                {/* Church Address and Contact Information */}
                <div className="info-text h3 text-light fs-5 mt-4">
                  <p className="mb-1">
                    Plot 4 Household of God Street, Off Kudirat Abiola Way, Clay Bus–Stop, Ikeja
                  </p>
                  <p className="mb-0">Email: info@householdofgodchurch.org</p>
                </div>

                {/* Optional: A small message for visitors */}
                <div className="mt-4">
                  <p className="text-light fw-bolder small mb-1">
                    We are working hard to bring you a new online experience.
                  </p>
                  <p className="text-light fw-bolder small">
                    Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}