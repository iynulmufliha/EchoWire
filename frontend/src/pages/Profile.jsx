import React, { useEffect, useState } from "react";
import API from "../api/api";
import { FaUserCircle, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const profileStyles = {
    container: {
        maxWidth: "500px",
        margin: "5rem auto",
        padding: "2.5rem",
        borderRadius: "6px",
        border: "1px solid #001F3F", // Dark Navy Border
        boxShadow: "0 8px 20px rgba(0, 31, 63, 0.1)",
        textAlign: "center",
        background: "#FFFFFF",
        fontFamily: "'Roboto', sans-serif",
        color: "#212529",
    },
    icon: {
        fontSize: "4rem",
        color: "#001F3F",
        marginBottom: "1rem",
    },
    heading: {
        fontSize: "2rem",
        fontWeight: 700,
        color: "#001F3F",
        marginBottom: "0.5rem",
    },
    detail: {
        fontSize: "1rem",
        color: "#495057",
        marginBottom: "0.75rem",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailIcon: {
        marginRight: '10px',
        color: "#0077CC", // Bright Blue
    },
    loadingText: {
        textAlign: "center",
        padding: "5rem",
        fontSize: "1.5rem",
        color: "#6C757D",
    },
    errorAlert: {
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#F8D7DA",
        color: "#721C24",
        border: "1px solid #F5C6CB",
        borderRadius: "4px",
        margin: "5rem auto",
        maxWidth: "400px",
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Mock API call to keep logic
        const mockUser = JSON.parse(localStorage.getItem('user')) || {name: 'Field Agent Gamma', email: 'agent@echo.com', createdAt: new Date().toISOString()};
        const res = await new Promise((resolve) => setTimeout(() => resolve({
            data: mockUser
        }), 500));
        // const res = await API.get("/auth/profile");
        setUser(res.data);
      } catch (err) {
        setError("Failed to fetch profile: Authorization or server error.");
      }
    };
    fetchProfile();
  }, []);

  if (error) return <div style={profileStyles.errorAlert}>{error}</div>;
  if (!user) return <p style={profileStyles.loadingText}>Loading Profile Data...</p>;

  return (
    <div style={profileStyles.container}>
      <FaUserCircle style={profileStyles.icon} />
      <h3 style={profileStyles.heading}>Welcome, {user.name}</h3>
      <div style={profileStyles.detail}>
        <FaEnvelope style={profileStyles.detailIcon} />
        <p className="text-muted" style={{margin: 0}}>{user.email}</p>
      </div>
      <div style={profileStyles.detail}>
        <FaCalendarAlt style={profileStyles.detailIcon} />
        <p style={{margin: 0}}>Account created on: {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <div style={{marginTop: '2rem'}}> {/* Added content section */}
        <h4 style={{fontSize: '1.2rem', color: '#0077CC', borderBottom: '1px dotted #DEE2E6', paddingBottom: '5px', marginBottom: '1rem'}}>
            System Access Details
        </h4>
        <p className="small text-muted" style={{margin: 0}}>
            <span style={{fontWeight: 600, color: '#001F3F'}}>Access Level:</span> Level 4 - Field Operations Command
        </p>
        <p className="small text-muted" style={{margin: 0}}>
            <span style={{fontWeight: 600, color: '#001F3F'}}>Last Login:</span> {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Profile;