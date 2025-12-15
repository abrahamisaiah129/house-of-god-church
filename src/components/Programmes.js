export default function Programmes() {
  const programmes = [
    { date: "01", month: "February", title: "Household is 32!", color: "#f15c5c" },
    { date: "12", month: "September", title: "Wednesday Service", color: "#1a0033" },
    { date: "01", month: "October", title: "Nigeria's Independence", color: "#ffaa00" },
    { date: "09", month: "September", title: "Sunday Service", color: "#4d1c1c" }
  ];

  return (
    <div className="container programme-section">
      <h2 className="text-center fw-bold mb-4">PROGRAMMES</h2>
      <div className="row g-4 justify-content-center">
        {programmes.map((programme, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div
              className="programme-card text-white"
              style={{ backgroundColor: programme.color }}
            >
              <div className="programme-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="programme-date">{programme.date}</div>
              <div className="programme-month">{programme.month}</div>
              <div className="programme-title">{programme.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-seemore">See More</button>
      </div>
    </div>
  );
}