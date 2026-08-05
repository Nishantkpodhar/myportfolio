import "./styles/Career.css";

const Career = () => {
  const experience = [
    {
      role: "Senior Software Engineer Team Lead",
      company: "Persistent Systems (Client: Wells Fargo)",
      period: "Jul 2025 – Present",
      summary:
        "Leading enterprise onboarding and document management platforms using React.js, TypeScript, Redux Toolkit, and Micro Frontend Architecture.",
    },
    {
      role: "Software Engineer II",
      company: "Apexon (Client: Builder.ai)",
      period: "Aug 2024 – Jun 2025",
      summary:
        "Built scalable web applications with React.js, Next.js, TypeScript, and REST APIs while improving performance and UX.",
    },
    {
      role: "React Developer",
      company: "Reward360 (Client: HDFC MyCards)",
      period: "Sep 2022 – Feb 2024",
      summary:
        "Developed banking modules for authentication, rewards, transactions, and dashboards using React.js, Next.js, and Redux Toolkit.",
    },
    {
      role: "Software Engineer",
      company: "Capgemini",
      period: "Nov 2021 – Aug 2022",
      summary:
        "Delivered L3 production support, incident resolution, and root cause analysis for enterprise applications.",
    },
    {
      role: "Software Engineer",
      company: "doodleblue Innovations",
      period: "Jul 2021 – Sep 2021",
      summary:
        "Created responsive React.js dashboards and reusable UI components integrated with REST APIs.",
    },
    {
      role: "Software Developer",
      company: "Cod4Solutions",
      period: "Jan 2018 – Dec 2020",
      summary:
        "Built airline booking and reservation applications using React.js, Redux, and REST APIs.",
    },
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experience.map((item) => (
            <div className="career-info-box" key={item.period}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
