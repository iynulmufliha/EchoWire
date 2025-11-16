import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import CrisisMap from "../components/CrisisMap";
import { FaChartLine, FaGlobeAmericas, FaUsers, FaShieldAlt, FaLightbulb, FaTools } from "react-icons/fa";
import afreen from "../../public/afreen.jpg";
import iynul from "../../public/photo_imresizer.jpeg";
import meena from "../../public/image.png";
// Reusable Styles for Minimalist White/Navy Theme  
const styles = {
  container: {
    padding: "4rem 2rem",
    backgroundColor: "#FFFFFF", // White background
    fontFamily: "'Roboto', sans-serif",
    color: "#212529", // Dark text
  },
  header: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#001F3F", // Dark Navy
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subHeader: {
    fontSize: "1.25rem",
    color: "#6C757D",
    marginBottom: "4rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#001F3F", // Dark Navy
    borderBottom: "3px solid #0077CC", // Bright Blue line
    paddingBottom: "10px",
    marginBottom: "2rem",
    marginTop: "3rem",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "1100px",
    margin: "0 auto 6rem auto",
  },
  statCard: {
    padding: "2rem",
    borderRadius: "8px",
    border: "1px solid #E9ECEF", // Minimalist light border
    boxShadow: "0 4px 15px rgba(0, 31, 63, 0.05)",
    textAlign: "center",
    transition: "transform 0.3s ease",
    backgroundColor: "#F8F9FA", // Slight off-white
  },
  statValue: {
    fontSize: "2.5rem",
    fontWeight: 900,
    color: "#0077CC", // Bright Blue
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "1rem",
    color: "#6C757D",
    textTransform: "uppercase",
    fontWeight: 500,
    marginTop: "0.5rem",
  },
  missionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "3rem",
    maxWidth: "1200px",
    margin: "0 auto 6rem auto",
  },
  missionCard: {
    padding: "2rem",
    borderRadius: "8px",
    border: "1px solid #DEE2E6",
    transition: "box-shadow 0.3s ease",
    backgroundColor: "#FFFFFF",
  },
  missionTitle: {
    color: "#001F3F", // Dark Navy
    marginBottom: "0.75rem",
    fontSize: "1.4rem",
    fontWeight: 700,
  },
  missionIcon: {
    fontSize: "2.5rem",
    color: "#001F3F", // Dark Navy icon
    marginBottom: "1rem",
  },
  ctaSection: {
    padding: "4rem 2rem",
    backgroundColor: "#F8F9FA", // Off-white contrast
    textAlign: "center",
    borderTop: "1px solid #E9ECEF",
  },
  ctaButton: {
    padding: "0.85rem 2.5rem",
    fontSize: "1.1rem",
    borderRadius: 4,
    border: "none",
    backgroundColor: "#001F3F", // Dark Navy Blue Button
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.15s ease",
    fontWeight: 600,
  },
  teamGrid: { // New style for Leadership Team section
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto 6rem auto",
    textAlign: "center",
  },
  teamCard: {
    padding: "1rem",
    border: "1px solid #DEE2E6",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
  },
  teamImg: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "1rem",
    border: "3px solid #0077CC",
  }
};

// Intersection Observer for stats animation
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
};

const About = () => {
  const stats = [
    { label: "Events Monitored", value: 10000, icon: <FaChartLine style={styles.missionIcon} />, color: "#0077CC" },
    { label: "Countries Covered", value: 120, icon: <FaGlobeAmericas style={styles.missionIcon} />, color: "#001F3F" },
    { label: "Users Engaged", value: 200000, icon: <FaUsers style={styles.missionIcon} />, color: "#0077CC" },
    { label: "Verified Reports", value: 5000, icon: <FaShieldAlt style={styles.missionIcon} />, color: "#001F3F" },
  ];

  const countValues = stats.map((stat) => useCountUp(stat.value));

  const missionItems = [
    {
      title: "Global Coverage",
      desc: "Monitor crises happening across continents in real-time with up-to-the-minute, industrial-grade updates.",
      icon: <FaGlobeAmericas style={styles.missionIcon} />,
    },
    {
      title: "Verified Reports",
      desc: "All events are rigorously vetted and verified by trusted, multi-source intelligence before reporting to ensure zero-error accuracy.",
      icon: <FaShieldAlt style={styles.missionIcon} />,
    },
    {
      title: "Innovation & Tech Stack",
      desc: "Harnessing cutting-edge AI and robust data visualization tools for an interactive, production-level dashboard.",
      icon: <FaLightbulb style={styles.missionIcon} />,
    },
    {
      title: "Decentralized Operations",
      desc: "Our model ensures resilience and continuous operation by empowering local, autonomous teams with standardized tools.",
      icon: <FaTools style={styles.missionIcon} />,
    },
  ];

  // New content: Leadership Team
  const leadershipTeam = [
    { name: "Shaista Afreen", role: "Frontend Designer & Testing", img: afreen },
    { name: "M. Iynul Mufliha", role: "Backend & SDLC Developer", img: iynul },
    { name: "Meenakshi Dangi", role: "Frontend & UI Designer", img: meena },
  ];

  const handleCardHover = (e, isEnter) => {
    e.currentTarget.style.transform = isEnter ? "scale(1.02)" : "scale(1)";
    e.currentTarget.style.boxShadow = isEnter ? "0 8px 25px rgba(0, 31, 63, 0.1)" : "0 4px 15px rgba(0, 31, 63, 0.05)";
  };

  return (
    <div style={styles.container}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={styles.header}>The EchoWire Mission: Industrial Resilience</h1>
        <p style={styles.subHeader}>
          Our mission is to transform crisis data into actionable intelligence, empowering communities to build resilience on an industrial scale.
        </p>

        {/* --- STATS SECTION --- */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={styles.statCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {React.cloneElement(stat.icon, { style: { ...styles.missionIcon, color: stat.color } })}
              <div style={{ ...styles.statValue, color: stat.color }}>
                {countValues[index].toLocaleString()}
              </div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- OUR APPROACH SECTION --- */}
        <h2 style={styles.sectionTitle}>Our Industrial Approach</h2>
        <div style={styles.missionGrid}>
          {missionItems.map((item, index) => (
            <div
              key={index}
              style={styles.missionCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {item.icon}
              <h4 style={styles.missionTitle}>{item.title}</h4>
              <p style={{ color: "#495057", fontSize: "1rem" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* --- NEW CONTENT: LEADERSHIP TEAM --- */}
        <h2 style={styles.sectionTitle}>Leadership Team</h2>
        <div style={styles.teamGrid}>
            {leadershipTeam.map((member, index) => (
                <div key={index} style={styles.teamCard}>
                    <img src={member.img} alt={member.name} style={styles.teamImg} />
                    <h5 style={{ color: "#001F3F", marginBottom: "0.25rem", fontWeight: 600 }}>{member.name}</h5>
                    <p style={{ color: "#6C757D", fontSize: "0.9rem" }}>{member.role}</p>
                </div>
            ))}
        </div>


        {/* --- MAP & GALLERY (Preserving existing components) --- */}
        <h2 style={styles.sectionTitle}>Global Crisis Monitoring</h2>
        <div style={{ marginBottom: "4rem" }}>
            <CrisisMap />
        </div>

        <h2 style={styles.sectionTitle}>Field Operations Gallery</h2>
        <div style={{ marginBottom: "4rem" }}>
            <Gallery />
        </div>

        {/* --- CTA SECTION --- */}
        <div style={styles.ctaSection}>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <h4 style={{ marginBottom: "1rem", color: "#001F3F", fontWeight: 700, fontSize: "1.8rem" }}>
              Join Our Industrial Community
            </h4>
            <p style={{ marginBottom: "1.5rem", color: "#495057", fontSize: "1.1rem" }}>
              Stay updated, report local events, or contribute to global relief efforts. Your verified
              input and actions are critical to our industrial-grade operations.
            </p>
            <button
              style={styles.ctaButton}
              className="cta-button"
              aria-label="Get involved with EchoWire community"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056B3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#001F3F")}
              onFocus={(e) => (e.currentTarget.style.backgroundColor = "#0056B3")}
              onBlur={(e) => (e.currentTarget.style.backgroundColor = "#001F3F")}
            >
              Get Involved Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;