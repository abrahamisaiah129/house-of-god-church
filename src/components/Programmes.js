import { useState, useMemo } from "react";

export default function Programmes() {
  // helper to get the next Sunday date (if today is Sunday, returns next week's Sunday)
  const getNextSunday = () => {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday
    // days until next Sunday (if today is Sunday, add 7)
    const daysUntil = (7 - day) % 7 || 7;
    const next = new Date(today);
    next.setDate(today.getDate() + daysUntil);
    const dayNum = String(next.getDate()).padStart(2, "0");
    const monthName = next.toLocaleString("en-US", { month: "long" });
    return { date: dayNum, month: monthName };
  };

  const nextSunday = getNextSunday();

  // Programmes: keep cards unchanged visually. Mark Sunday recurring items with `everySunday`.
  // Add a `priority` field; lower number = higher priority.
  const programmes = [
    {
      date: "01",
      month: "February",
      title: "Household is 32!",
      color: "#f15c5c",
      priority: 3,
    },
    {
      date: "12",
      month: "September",
      title: "Wednesday Service",
      color: "#1a0033",
      priority: 2,
    },
    {
      date: "01",
      month: "October",
      title: "Nigeria's Independence",
      color: "#ffaa00",
      priority: 4,
    },
    {
      date: nextSunday.date,
      month: nextSunday.month,
      title: "Sunday Service",
      color: "#4d1c1c",
      everySunday: true,
      priority: 1,
    },
  ];

  // Sort programmes by ascending priority (1 = highest)
  const sortedProgrammes = useMemo(() => {
    return [...programmes].sort(
      (a, b) => (a.priority || 999) - (b.priority || 999)
    );
  }, [nextSunday.date, nextSunday.month]);

  // Static site-wide service times / info (shown in See More popup)
  const serviceTimes = [
    { label: "Sunday Service", time: "9:00 AM" },
    { label: "Wednesday Bible Study", time: "6:00 PM" },
    { label: "Sunday Prayer Meeting", time: "8:00 AM - 9:00 AM" },
  ];

  const infos = [
    { title: "Prayer Meeting", details: "8:00 AM - 9:00 AM Sundays" },
    { title: "Proclaimers", details: "9:00 AM Saturdays" },
    {
      title: "Apokalupsis",
      details:
        "7:00 AM Sundays on Raypower 100.5fm; 7:00 AM - 7:30 AM Sundays on Household of God WebMedia",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container programme-section">
      <h2 className="text-center fw-bold mb-4">PROGRAMMES</h2>
      <div className="row g-4 justify-content-center">
        {sortedProgrammes.map((programme, index) => (
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
        <button className="btn btn-seemore" onClick={() => setIsOpen(true)}>
          See More
        </button>
      </div>

      {isOpen && (
        <div
          className="programmes-modal"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: 20,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal-card bg-white rounded p-4"
            style={{ width: "100%", maxWidth: 800 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h3 className="mb-0">Programs & Info</h3>
              <button
                className="btn-close"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <section className="mb-4">
              <h4>Service Times</h4>
              <ul>
                {serviceTimes.map((s, i) => (
                  <li key={i}>
                    <strong>{s.label}:</strong> {s.time}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-4">
              <h4>Info</h4>
              <ul>
                {infos.map((info, i) => (
                  <li key={i}>
                    <strong>{info.title}:</strong> {info.details}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4>Programmes (details)</h4>
              <div className="row">
                {sortedProgrammes.map((p, idx) => (
                  <div key={idx} className="col-md-6 mb-2">
                    <div className="p-2 border rounded">
                      <div>
                        <strong>{p.title}</strong>
                      </div>
                      <div className="text-muted">
                        {p.date} {p.month}
                      </div>
                      {/* For programmes that are every Sunday, show weekday as "Professional" inside the popup only */}
                      {p.everySunday ? (
                        <div className="mt-1">
                          <em>Weekday:</em> Professional
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
