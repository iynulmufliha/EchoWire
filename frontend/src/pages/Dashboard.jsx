import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaTasks, FaEnvelope, FaChartLine, FaUserCog, FaPowerOff, FaClock } from "react-icons/fa";

// Reusable Styles for Minimalist White/Navy Theme
const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#FFFFFF", // White background
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
    color: "#212529",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#001F3F", // Dark Navy
    marginBottom: "2rem",
    borderBottom: "3px solid #0077CC",
    paddingBottom: "10px",
    maxWidth: "1200px",
    margin: "0 auto 2rem auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto 3rem auto",
  },
  dashboardCard: {
    padding: "1.5rem",
    borderRadius: "8px",
    border: "1px solid #DEE2E6", // Light border
    boxShadow: "0 4px 10px rgba(0, 31, 63, 0.05)",
    fontWeight: 500,
    color: "#001F3F", // Dark Navy
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    position: "relative",
    backgroundColor: "#F8F9FA", // Slight off-white
  },
  dashboardCardHover: { // Inline style for hover effect
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(0, 31, 63, 0.1)",
  },
  iconWrapper: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    position: "relative",
    display: "inline-block",
    color: "#0077CC", // Bright Blue icon color
  },
  countBadge: {
    position: "absolute",
    top: "-8px",
    right: "-12px",
    background: "#DC3545", // Red for alerts/counts
    color: "#fff",
    borderRadius: "50%",
    padding: "0.25rem 0.6rem",
    fontSize: "0.85rem",
    fontWeight: "bold",
    minWidth: '28px',
    textAlign: 'center',
    lineHeight: '1.2',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  userCard: {
    maxWidth: "1200px",
    margin: "0 auto 3rem auto",
    padding: "2rem",
    border: "1px solid #001F3F", // Navy border for profile
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#001F3F",
    margin: 0,
  },
  userEmail: {
    color: "#6C757D",
    fontSize: "1rem",
    margin: 0,
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#DC3545", // Red for logout/danger
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background-color 0.2s",
  },
  modalContent: {
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    border: "3px solid #001F3F", // Strong Navy Border for modal
    boxShadow: "0 10px 30px rgba(0, 31, 63, 0.3)",
    textAlign: "center",
    color: "#212529",
  },
  modalTitle: {
    color: "#001F3F",
    marginBottom: "1rem",
    fontSize: "1.8rem",
    fontWeight: 700,
  },
  modalInfo: {
    color: "#495057",
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
  },
  modalCloseButton: {
    padding: "10px 20px",
    backgroundColor: "#001F3F",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background-color 0.2s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 31, 63, 0.5)", // Dark Navy Overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  sectionTitle: { // New style for content sections
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#001F3F",
    marginBottom: "1.5rem",
    paddingLeft: '10px',
    borderLeft: '4px solid #0077CC'
  },
  // New styles for activity feed
  activityCard: {
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #DEE2E6',
    backgroundColor: '#FFFFFF',
    marginBottom: '1rem',
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px dotted #E9ECEF',
    fontSize: '0.95rem'
  }
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleCardClick = (feature) => {
    setModalData({
      title: feature.title,
      info: `Details for: ${feature.info}. This is a production-level dashboard modal showing critical information.`,
    });
  };

  const features = [
    { title: "Notifications", info: "You have 5 new alerts", icon: <FaBell />, count: 5, color: "#DC3545" },
    { title: "Tasks", info: "12 pending tasks", icon: <FaTasks />, count: 12, color: "#FFC107" },
    { title: "Messages", info: "3 unread messages", icon: <FaEnvelope />, count: 3, color: "#0077CC" },
    { title: "Reports", info: "Monthly report ready", icon: <FaChartLine />, count: 1, color: "#28A745" },
  ];

  const recentActivity = [ // Added content
    { id: 1, text: 'Report #445-A verified by Data Team.', time: '5 mins ago', icon: '✅' },
    { id: 2, text: 'User Profile updated for Jane Doe.', time: '1 hour ago', icon: '👤' },
    { id: 3, text: 'High-Alert triggered in Sector Beta.', time: '3 hours ago', icon: '🚨' },
    { id: 4, text: 'System backup initiated successfully.', time: '1 day ago', icon: '💾' },
  ];

  const chartPlaceholderStyle = { // Added content
    height: '300px',
    backgroundColor: '#F8F9FA',
    border: '1px solid #DEE2E6',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6C757D',
    fontSize: '1.2rem',
    fontWeight: 500,
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>EchoWire Industrial Dashboard</h2>

      {user && (
        <div style={styles.userCard}>
          <div>
            <h3 style={styles.userName}>Welcome, {user.name}</h3>
            <p style={styles.userEmail}><FaUserCog style={{marginRight: '8px'}} />{user.email}</p>
          </div>
          <button
            style={styles.logoutButton}
            onClick={handleLogout}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C82333")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#DC3545")}
          >
            <FaPowerOff style={{marginRight: '8px'}} />Logout
          </button>
        </div>
      )}

      {/* --- FEATURE CARDS --- */}
      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={styles.dashboardCard}
            onClick={() => handleCardClick(feature)}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.dashboardCardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.dashboardCard)}
          >
            <div style={styles.iconWrapper}>
              {React.cloneElement(feature.icon, { style: { color: feature.color } })}
              {feature.count > 0 && <span style={{ ...styles.countBadge, background: feature.color }}>{feature.count}</span>}
            </div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: '#001F3F' }}>{feature.title}</h4>
            <p style={{ fontSize: "0.9rem", color: "#495057", margin: 0 }}>{feature.info}</p>
          </div>
        ))}
      </div>

      {/* --- ADDED CONTENT: CHARTS AND ACTIVITY --- */}
      <div className="row" style={{maxWidth: "1200px", margin: "0 auto"}}>
        {/* Key Metrics Chart Placeholder */}
        <div className="col-md-7">
          <h3 style={styles.sectionTitle}>Key Metrics Chart (Placeholder)</h3>
          <div style={chartPlaceholderStyle}>
            <p>Industrial-Grade Metrics Visualization</p>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="col-md-5">
          <h3 style={styles.sectionTitle}>Recent Activity</h3>
          <div style={styles.activityCard}>
            {recentActivity.map(activity => (
              <div key={activity.id} style={styles.activityItem}>
                <span className="me-2 fs-5" role="img" aria-label="icon" style={{color: '#0077CC'}}>{activity.icon}</span>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-semibold" style={{color: '#001F3F'}}>{activity.text}</p>
                  <span className="text-muted small"><FaClock className="me-1" />{activity.time}</span>
                </div>
              </div>
            ))}
            <div className="text-center pt-2">
                <a href="#" style={{color: '#0077CC', textDecoration: 'none', fontWeight: 600}}>View All Activity →</a>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {modalData && (
        <div style={styles.modalOverlay} onClick={() => setModalData(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>{modalData.title}</h3>
            <p style={styles.modalInfo}>{modalData.info}</p>
            <button
              style={styles.modalCloseButton}
              onClick={() => setModalData(null)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056B3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#001F3F")}
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;