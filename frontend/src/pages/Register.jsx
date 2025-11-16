import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaBroadcastTower, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage(data.message || "Registration successful! Redirecting...");
        setIsSuccess(true);
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(data.error || "Registration failed");
        setIsSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMessage("Server not reachable. Try again later.");
      setIsSuccess(false);
    }
  };

  return (
    <div style={styles.outerContainer}>
      {/* LEFT PANEL */}
      <div style={styles.leftPanel}>
        <div style={styles.logoArea}>
          <FaBroadcastTower style={styles.logoIcon} />
          <h1 style={styles.websiteName}>EchoWire</h1>
        </div>

        <h3 style={styles.tagline}>Connect to the world. Report with impact.</h3>

        <p style={styles.featureText}>
          Access real-time global event monitoring, personalized dashboards, and community support tools.
        </p>

        
         <img
                    src="public/pimg2.jpg" 
                    alt="Login Graphic" 
                    style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                />
      </div>

      {/* RIGHT PANEL */}
      <div style={styles.rightPanel}>
        <h2 style={styles.heading}>Create Your Account</h2>
        <p style={styles.subheading}>Join EchoWire to start reporting and engaging.</p>

        <form onSubmit={handleSubmit} style={styles.form}>

          {/* NAME INPUT */}
          <div style={styles.inputWrapper}>
            <FaUser style={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* EMAIL INPUT */}
          <div style={styles.inputWrapper}>
            <FaEnvelope style={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* PASSWORD INPUT */}
          <div style={styles.inputWrapper}>
            <FaLock style={styles.inputIcon} />
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {message && (
          <p
            style={{
              ...styles.message,
              color: isSuccess ? styles.successColor : styles.errorColor,
              borderColor: isSuccess ? styles.successColor : styles.errorColor,
              backgroundColor: isSuccess ? styles.successBackground : styles.errorBackground,
            }}
          >
            {message}
          </p>
        )}

        <p style={styles.linkContainer}>
          Already have an account?
          <span onClick={() => navigate("/login")} style={styles.link}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

/* -------------------- STYLES ---------------------- */

const NAVY_DARK = "#001f3f";
const NAVY_ACCENT = "#004085";
const OFF_WHITE = "#f8f9fa";
const LIGHT_GRAY = "#ced4da";

const styles = {
  outerContainer: {
    display: "flex",
    maxWidth: "900px",
    minHeight: "550px",
    margin: "5rem auto",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    background: "#ffffff",
    border: `1px solid ${LIGHT_GRAY}`,
  },

  leftPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    backgroundColor: OFF_WHITE,
    borderRight: `1px solid ${LIGHT_GRAY}`,
    textAlign: "center",
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    color: NAVY_ACCENT,
  },
  logoIcon: {
    fontSize: "2.5rem",
    marginRight: "0.5rem",
  },
  websiteName: {
    fontSize: "2rem",
    fontWeight: "800",
    margin: 0,
  },

  tagline: {
    color: NAVY_DARK,
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
  },

  featureText: {
    color: "#495057",
    fontSize: "0.95rem",
    marginBottom: "2rem",
  },

  graphicPlaceholder: {
    width: "150px",
    height: "150px",
    backgroundColor: LIGHT_GRAY,
    borderRadius: "50%",
    opacity: 0.6,
  },

  rightPanel: {
    flex: 1.2,
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "#fff",
  },

  heading: {
    marginBottom: "0.5rem",
    color: NAVY_DARK,
    fontSize: "2rem",
    fontWeight: "700",
  },

  subheading: {
    marginBottom: "2rem",
    color: "#6c757d",
    fontSize: "1rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  /* ---- ICON + INPUT WRAPPER ---- */
  inputWrapper: {
    position: "relative",
    width: "100%",
  },

  inputIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: NAVY_ACCENT,
    fontSize: "1rem",
    opacity: 0.8,
  },

  input: {
    width: "100%",
    padding: "0.9rem 1.2rem",
    paddingLeft: "2.7rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: `1px solid ${LIGHT_GRAY}`,
    outline: "none",
    backgroundColor: OFF_WHITE,
    transition: "border-color 0.2s ease",
  },

  button: {
    padding: "1rem",
    fontSize: "1.05rem",
    borderRadius: "6px",
    border: `1px solid ${NAVY_ACCENT}`,
    backgroundColor: NAVY_ACCENT,
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },

  message: {
    marginTop: "1.5rem",
    padding: "0.75rem",
    borderRadius: "6px",
    fontWeight: "500",
    border: "1px solid",
  },

  errorColor: "#dc3545",
  errorBackground: "#f8d7da",

  successColor: NAVY_ACCENT,
  successBackground: "#e6f0ff",

  linkContainer: {
    marginTop: "1.5rem",
    fontSize: "0.95rem",
    color: "#6c757d",
  },

  link: {
    color: NAVY_ACCENT,
    textDecoration: "underline",
    cursor: "pointer",
    marginLeft: "0.4rem",
    fontWeight: "600",
  },
};

export default Register;
