import Image from 'next/image';

export default function WatchSermons() {
  const sermons = [
    { title: "What is your purpose?", pastor: "Pastor Chris Okotie", date: "31st Mar, 2025" },
    { title: "What is your purpose?", pastor: "Pastor Chris Okotie", date: "31st Mar, 2025" },
    { title: "What is your purpose?", pastor: "Pastor Chris Okotie", date: "31st Mar, 2025" },
    { title: "What is your purpose?", pastor: "Pastor Chris Okotie", date: "31st Mar, 2025" }
  ];

  return (
    <div className="watch-sermon">
      <div className="container">
        <h2 className="text-center mb-4">WATCH SERMONS</h2>
        <div className="row g-4">
          {sermons.map((sermon, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="sermon-card">
                <Image 
                  src="/assets/images/ca1.png" 
                  alt="Sermon" 
                  width={300}
                  height={250}
                  className="img-fluid"
                  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                />
                <div className="p-3">
                  <h5>{sermon.title}</h5>
                  <p className="text-muted">{sermon.pastor}</p>
                  <div className="row">
                    <div className="col">
                      <p><i className="fas fa-calendar-alt"></i> {sermon.date}</p>
                    </div>
                    <div className="col text-end">
                      <a href="#"><i className="fas fa-bookmark me-2"></i></a>
                      <a href="#"><i className="fas fa-share"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination mt-5">
          <a href="#"><i className="fas fa-chevron-left"></i></a>
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <span>...</span>
          <a href="#">14</a>
          <a href="#">15</a>
          <a href="#"><i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  );
}