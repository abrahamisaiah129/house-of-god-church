import Image from 'next/image';

export default function AboutChurch() {
  return (
    <div className="container church-section">
      <div className="row align-items-stretch church-row">
        <div className="col-md-5 d-flex">
          <div className="w-100 h-100">
            <Image 
              src="/assets/images/ca1.png" 
              alt="Church Building" 
              width={500}
              height={400}
              className="church-image h-100 w-100 object-fit-cover rounded"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column justify-content-center w-100">
            <h2 className="church-title">A CHURCH WHERE GRACE MEETS GLORY</h2>
            <p className="church-text">
              The young ministry had its inaugural Sunday morning service on the 1st of February, 1987 in his living room, then in the Ikeja area of Lagos state. As membership of the young but peculiar church grew into the hundreds and thousands, the surrounding grounds of his house became sitting area for the overspill from the living room.
              <br /><br />
              The young ministry had its inaugural Sunday morning service on the 1st of February, 1987 in his living room, then in the Ikeja area of Lagos state.
            </p>
            <div className="text-start mt-3">
              <a href="/about-church" className="btn-see-more">See More. . .</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}