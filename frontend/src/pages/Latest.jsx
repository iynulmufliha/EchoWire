import React from "react";
import BlogList from "../components/BlogList";
import StoryList from "../components/StoryList";
import PodcastPlayer from "../components/PodcastPlayer";

const Latest = () => {
  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#001F3F", // Dark Navy
    borderBottom: "3px solid #0077CC", // Bright Blue line
    paddingBottom: "10px",
    marginBottom: "2rem",
    marginTop: "3rem",
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '3rem auto 2rem auto',
  };

  const subTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#001F3F",
    marginTop: "40px",
    marginBottom: "20px",
    borderLeft: '4px solid #0077CC',
    paddingLeft: '15px',
  };

  return (
    <div className="container py-5" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <h1 style={sectionTitleStyle}>Latest Industrial-Grade Intelligence</h1>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section className="py-3">
          <h2 style={subTitleStyle}>Verified Impact Stories</h2>
          <StoryList />
        </section>

        <section className="py-1">
          <h2 style={subTitleStyle}>Field Agent Blogs & Briefings</h2>
          <BlogList />
        </section>

        <section className="py-1">
          <h2 style={subTitleStyle}>Podcast Dispatches</h2>
          <PodcastPlayer />
        </section>
        
        {/* Added content section */}
        <section className="py-5" style={{textAlign: 'center', marginTop: '4rem', borderTop: '1px solid #DEE2E6'}}>
            <h3 style={{color: '#001F3F', fontWeight: 700}}>Data Integrity Statement</h3>
            <p className="text-muted" style={{maxWidth: '800px', margin: '15px auto'}}>
                All intelligence presented here adheres to our industrial verification protocol, ensuring minimal noise and maximum data fidelity.
            </p>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#001F3F',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'background-color 0.2s',
            }}>
                Read Protocol
            </button>
        </section>
      </div>
    </div>
  );
};

export default Latest;