import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Assuming you are using react-icons for the logo, consistent with the Register component
import { FaBroadcastTower } from "react-icons/fa"; 

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMessage("Server not reachable. Try again later.");
    }
  };

  return (
    // Outer container for the full screen/card
    <div style={styles.outerContainer}>
        {/* Left Panel: Branding and Content */}
        <div style={styles.leftPanel}>
            <div style={styles.logoArea}>
                <FaBroadcastTower style={styles.logoIcon} />
                <h1 style={styles.websiteName}>EchoWire</h1>
            </div>
            <h3 style={styles.tagline}>
                Your trusted source for global crisis reporting.
            </h3>
            <p style={styles.featureText}>
                Log in to monitor alerts, manage your tasks, and view your personalized dashboard.
            </p>
            {/* Placeholder for an image or graphic */}
        
                <img
                    src="public/pimg2.jpg" 
                    alt="Login Graphic" 
                    style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                />
          
        </div>

        {/* Right Panel: Login Form */}
        <div style={styles.rightPanel}>
            <h2 style={styles.heading}>Welcome Back</h2>
            <p style={styles.subheading}>Log in to your EchoWire account.</p>
            
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button} disabled={loading}>
                    {loading ? "Logging in..." : "Sign In"}
                </button>
            </form>
            
            {message && (
                <p style={{
                    ...styles.message,
                    borderColor: styles.errorColor, // Border is dark blue/navy for error too
                    backgroundColor: styles.errorBackground
                }}>
                    {message}
                </p>
            )}

            <p style={styles.linkContainer}>
                Don't have an account? 
                <span onClick={() => navigate("/register")} style={styles.link}>
                    Register
                </span>
            </p>
        </div>
    </div>
  );
};

// --- Minimalist White & Navy Blue Theme Styles ---
const NAVY_DARK = "#001f3f";
const NAVY_ACCENT = "#004085";
const OFF_WHITE = "#f8f9fa";
const LIGHT_GRAY = "#ced4da";

const styles = {
  // Main container (Two-column wrapper)
  outerContainer: {
    display: "flex",
    maxWidth: "900px", // Increased max width for the split layout
    height: "auto",
    minHeight: "550px",
    margin: "5rem auto",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    overflow: "hidden", // Ensures border radius is respected
    background: "#ffffff",
    border: `1px solid ${LIGHT_GRAY}`,
  },

  // Left Panel Styles (Branding/Image side)
  leftPanel: {
    flex: 1, // Takes up roughly half the space
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    backgroundColor: OFF_WHITE, // Subtle background contrast
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: NAVY_DARK,
      fontWeight: "bold",
      fontSize: "0.8rem",
      opacity: 0.6,
  },

  // Right Panel Styles (Form side)
  rightPanel: {
    flex: 1.2, // Takes slightly more space
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "#ffffff", // Pure white for the form
  },

  // Form elements (Navy blue accents)
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
  // Input: Off-white background, thin gray border, navy blue text
  input: {
    padding: "0.9rem 1.2rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: `1px solid ${LIGHT_GRAY}`, // Thin light gray border
    outline: "none",
    backgroundColor: OFF_WHITE,
    color: NAVY_DARK, // Input text color is dark blue
    transition: "border-color 0.2s ease",
  },
  // Button: Solid Navy Blue
  button: {
    padding: "1rem",
    fontSize: "1.05rem",
    borderRadius: "6px",
    border: `1px solid ${NAVY_ACCENT}`, // Dark blue border for consistency
    backgroundColor: NAVY_ACCENT,
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  
  // Message Styling
  message: {
    marginTop: "1.5rem",
    color: "#dc3545", // Red for error
    fontWeight: "500",
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid", 
  },
  errorColor: "#dc3545",
  errorBackground: "#f8d7da",

  // Link Styling
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
  }
};

export default Login;