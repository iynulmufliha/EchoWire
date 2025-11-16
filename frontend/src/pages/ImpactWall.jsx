import React, { useState, useRef } from "react";
import { FaDonate, FaHandsHelping, FaGlobe, FaBook, FaStar, FaBuilding, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImpactWall.css";

const ImpactWall = () => {
  const [stats, setStats] = useState({
    donations: 5_000_000,
    volunteers: 1000,
    reach: 120,
    stories: 250,
  });
  const [donationName, setDonationName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [points, setPoints] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [triviaMsg, setTriviaMsg] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [volunteerBadgeName, setVolunteerBadgeName] = useState(""); // NEW: State for volunteer badge
  const carouselRef = useRef();

  const triviaQuestion = {
    question: "Which is the main goal of our foundation?",
    options: ["Education", "Crisis Relief", "Animal Welfare", "Space Research"],
    answer: "Crisis Relief",
  };

  const stories = [
    {
      id: 1,
      title: "Rebuilding Hope in Kerala",
      beforeImg: "https://i.pinimg.com/1200x/da/a9/93/daa993d245e6ccf4cd2c5420433bbd05.jpg",
      afterImg: "https://i.pinimg.com/1200x/35/c3/0b/35c30b07f39d77aa7d5f74ac02a68a3e.jpg",
      description: "After the devastating floods in Kerala, our foundation helped rebuild homes and provided essential kits to over 200 families, restoring their hope and dignity.",
    },
    {
      id: 2,
      title: "Empowering Women in Rajasthan",
      beforeImg: "https://i.pinimg.com/1200x/ad/05/f6/ad05f6d194e635fdee5f8849d5119d4d.jpg",
      afterImg: "https://i.pinimg.com/1200x/12/21/0f/12210ffd04d138553185686c7fefc042.jpg",
      description: "We launched self-help groups for women artisans in rural Rajasthan, providing them with tools and training to start sustainable businesses.",
    },
    {
      id: 3,
      title: "Rebuilding Lives in Palestine",
      beforeImg: "https://i.pinimg.com/736x/b6/91/38/b691382fe88bdce4e10ec7f434e8bd7d.jpg",
      afterImg: "https://i.pinimg.com/736x/ec/26/3d/ec263d4203aa7b73bd29dea474a2289b.jpg",
      description: "In war-torn Palestine, our foundation joined local relief teams to rebuild homes, provide clean water, and deliver medical aid — bringing hope back amid the ruins.",
    },
    {
      id: 4,
      title: "Feeding the Hungry During COVID-19",
      beforeImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPue112T1cZSX5iF9eJt7mH7awLKEBedkvrw&s",
      afterImg: "https://i.pinimg.com/1200x/e9/8a/cc/e98acc79ba39a0dd08ae709027182602.jpg",
      description: "During the pandemic lockdown, we distributed over 1 million meals to daily wage workers and homeless individuals across major cities.",
    },
    {
      id: 5,
      title: "Clean Water Initiative in Odisha",
      beforeImg: "https://i.pinimg.com/1200x/03/14/39/0314395201f3c3bbb395320049b73eb6.jpg",
      afterImg: "https://i.pinimg.com/1200x/5f/68/87/5f688736483a11fb24cb44d74c3bc67e.jpg",
      description: "Our team installed solar-powered water filters in 15 drought-prone villages, providing clean drinking water to thousands of residents.",
    },
    {
      id: 6,
      title: "Healing the Earth in Himachal",
      beforeImg: "https://i.pinimg.com/736x/ba/e2/11/bae211cd22d9d659bae95688a98b85c9.jpg",
      afterImg: "https://i.pinimg.com/1200x/06/74/1f/06741f4e29fa189f63ac64caff70e5df.jpg",
      description: "Volunteers planted over 50,000 trees in the deforested slopes of Himachal Pradesh, restoring the ecosystem and improving local climate conditions.",
    },
    {
      id: 7,
      title: "Disaster Relief in Turkey",
      beforeImg: "https://i.pinimg.com/1200x/9b/32/85/9b328531cc4053489fed3d1f1726ee48.jpg",
      afterImg: "https://i.pinimg.com/1200x/18/d8/9e/18d89e4726e6d302c382f168233f2c5d.jpg",
      description: "We partnered with global NGOs to deliver medical aid, temporary shelters, and psychological support to survivors.",
    },
    {
      id: 8,
      title: "Reuniting Families in Ukraine",
      beforeImg: "https://picsum.photos/600/400?random=8",
      afterImg: "https://picsum.photos/600/400?random=22",
      description: "Our volunteers worked tirelessly in refugee camps to reunite families separated by the war and provide them with essential medical and legal aid.",
    },
  ];

  const annualImpactData = [ // Added content
    { title: "Financials Audited", value: "Q3 2025", icon: <FaClipboardList className="fs-4" />, color: "#0077CC" },
    { title: "New Partnerships", value: "15+ Agencies", icon: <FaHandsHelping className="fs-4" />, color: "#001F3F" },
    { title: "Resilience Projects", value: "34 Active", icon: <FaBuilding className="fs-4" />, color: "#0077CC" },
  ];

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    if (!donationName.trim() || !donationAmount) return;
    const amountNum = Number(donationAmount);
    if (amountNum <= 0) return;
    setStats((prev) => ({ ...prev, donations: prev.donations + amountNum }));
    setPoints((prev) => prev + Math.floor(amountNum / 100));
    setDonationName("");
    setDonationAmount("");
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!volunteerName.trim() || !volunteerEmail.trim()) return;
    setStats((prev) => ({ ...prev, volunteers: prev.volunteers + 1 }));
    setPoints((prev) => prev + 50);
    setVolunteerBadgeName(volunteerName.trim()); // NEW: Set the volunteer name for the badge
    setVolunteerName("");
    setVolunteerEmail("");
  };

  const handleTrivia = () => {
    if (!selectedOption) return;
    if (selectedOption === triviaQuestion.answer) {
      setPoints((prev) => prev + 50);
      setTriviaMsg("Correct! +50 points added.");
    } else {
      setTriviaMsg("Incorrect. Try again!");
    }
    setTimeout(() => setTriviaMsg(""), 3000);
  };

  // Scroll function remains but buttons are removed from render
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const openStoryModal = (story) => {
    setSelectedStory(story);
    setShowStoryModal(true);
  };

  return (
    <div className="impact-wall-container container">
      <h1 className="text-center fw-bold text-uppercase mb-3" style={{ color: "#001F3F" }}>
        Industrial Impact Wall
      </h1>

      {/* NEW: Volunteer Badge Display */}
      {volunteerBadgeName && (
        <div className="text-center mb-5">
          <div className="volunteer-badge">
            <FaCheckCircle className="me-2 fs-5" />
            Volunteer Badge Unlocked: {volunteerBadgeName}
          </div>
        </div>
      )}

      {/* --- STATISTICS GRID (Section 1: Light Gray) --- */}
      <section className="section-light-gray">
        <h2 className="fw-bold fs-4 mb-4 text-center" style={{ color: "#001F3F" }}>
          Global Impact Snapshot
        </h2>
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <div className="stat-item">
              <FaDonate className="text-muted fs-3 mb-2" style={{ color: '#0077CC !important' }}/>
              <div className="stat-value text-nowrap">${stats.donations.toLocaleString()}</div>
              <div className="stat-label">Total Donations</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="stat-item">
              <FaHandsHelping className="text-muted fs-3 mb-2" style={{ color: '#0077CC !important' }} />
              <div className="stat-value">{stats.volunteers.toLocaleString()}</div>
              <div className="stat-label">Active Volunteers</div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="stat-item">
              <FaGlobe className="text-muted fs-3 mb-2" style={{ color: '#0077CC !important' }} />
              <div className="stat-value">{stats.reach}+</div>
              <div className="stat-label">Countries Reached</div>
            </div>
            </div>
          <div className="col-md-3 col-sm-6">
            <div className="stat-item">
              <FaBook className="text-muted fs-3 mb-2" style={{ color: '#0077CC !important' }} />
              <div className="stat-value">{stats.stories.toLocaleString()}</div>
              <div className="stat-label">Impact Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ANNUAL IMPACT OVERVIEW (Section 2: White) --- */}
      <section className="section-white">
        <h2 className="fw-bold fs-4 mb-4 text-center" style={{ color: "#001F3F" }}>
          Q3 Annual Impact Metrics Overview
        </h2>
        <div className="row g-3">
          {annualImpactData.map((item, index) => (
              <div className="col-md-4" key={index}>
                  <div className="impact-card p-4 text-center">
                      {React.cloneElement(item.icon, { className: 'fs-4', style: { color: item.color } })}
                      <h5 className="mt-2 fw-semibold" style={{color: item.color}}>{item.value}</h5>
                      <p className="text-muted small mb-0">{item.title}</p>
                  </div>
              </div>
          ))}
        </div>
      </section>


      {/* --- DONATION & VOLUNTEER FORMS (Section 3: Light Gray) --- */}
      <section className="section-light-gray">
        <h2 className="fw-bold fs-4 mb-4 text-center" style={{ color: "#001F3F" }}>
          Join the Movement
        </h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="impact-card p-4 shadow-sm">
              <h3 className="fw-semibold fs-5 mb-4" style={{ color: "#001F3F" }}>
                Make a High-Impact Donation
              </h3>
              <form onSubmit={handleDonationSubmit} noValidate>
                <input
                  type="text"
                  className="industrial-input mb-3 w-100"
                  placeholder="Your Name (Optional)"
                  value={donationName}
                  onChange={(e) => setDonationName(e.target.value)}
                  aria-label="Donation Name"
                />
                <input
                  type="number"
                  className="industrial-input mb-3 w-100"
                  placeholder="Amount (USD)"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  min="1"
                  required
                  aria-label="Donation Amount"
                />
                <button type="submit" className="industrial-btn w-100" aria-label="Donate Button">
                  Donate Now
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="impact-card p-4 shadow-sm">
              <h3 className="fw-semibold fs-5 mb-4" style={{ color: "#001F3F" }}>
                Join as Volunteer
              </h3>
              <form onSubmit={handleVolunteerSubmit} noValidate>
                <input
                  type="text"
                  className="industrial-input mb-3 w-100"
                  placeholder="Your Name"
                  value={volunteerName}
                  onChange={(e) => setVolunteerName(e.target.value)}
                  required
                  aria-label="Volunteer Name"
                />
                <input
                  type="email"
                  className="industrial-input mb-3 w-100"
                  placeholder="Email"
                  value={volunteerEmail}
                  onChange={(e) => setVolunteerEmail(e.target.value)}
                  required
                  aria-label="Volunteer Email"
                />
                <button type="submit" className="industrial-btn w-100" aria-label="Join Volunteer Button">
                  Join Volunteer Force
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRIVIA CHALLENGE (Section 4: White) --- */}
      <section className="section-white">
        <div className="impact-card p-4 shadow-sm text-center">
          <h2 className="fw-semibold fs-5 mb-3" style={{ color: "#001F3F" }}>
            Industrial Trivia Challenge
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <FaStar className="fs-4 me-2" style={{ color: "#0077CC" }} />
            <p className="small fw-bold mb-0" style={{ color: "#001F3F" }}>
              Current Impact Points: {points.toLocaleString()}
            </p>
          </div>
          <p className="mb-4 text-muted small">{triviaQuestion.question}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {triviaQuestion.options.map((opt, idx) => (
              <Button
                key={idx}
                variant={selectedOption === opt ? "primary" : "outline-secondary"}
                className={`trivia-option ${selectedOption === opt ? 'industrial-btn' : 'btn-outline-dark'}`}
                onClick={() => setSelectedOption(opt)}
              >
                {opt}
              </Button>
            ))}
        </div>
          <Button onClick={handleTrivia} className="industrial-btn" disabled={!selectedOption}>
            Submit Answer
          </Button>
          {triviaMsg && (
            <p className={`mt-3 fw-bold small ${triviaMsg.includes("Correct") ? "text-success" : "text-danger"}`}>
              {triviaMsg}
            </p>
          )}
        </div>
      </section>

      {/* --- IMPACT STORIES CAROUSEL (Section 5: Full Width, scrollable) --- */}
      <section className="mb-5 position-relative">
        <h2 className="fw-bold fs-4 mb-4 text-center" style={{ color: "#001F3F" }}>
          Verified Impact Stories (Before & After)
        </h2>
        <div
          ref={carouselRef}
          className="stories-container d-flex overflow-auto gap-4 py-2 px-1"
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="story-card shadow-sm"
              onClick={() => openStoryModal(story)}
            >
              <img src={story.afterImg} alt={story.title} draggable={false} />
              <div className="story-card-body">
                <h5 className="story-title text-truncate">{story.title}</h5>
                <p className="story-description">{story.description.substring(0, 70)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORY MODAL (using Bootstrap) --- */}
      <Modal show={showStoryModal} onHide={() => setShowStoryModal(false)} centered>
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title className="fw-bold" style={{ color: "#001F3F" }}>{selectedStory?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <figure className="m-0 text-center" style={{ maxWidth: 200 }}>
              <figcaption className="fw-semibold text-muted mb-1 small text-uppercase">Before Crisis</figcaption>
              <img
                src={selectedStory?.beforeImg}
                alt="Before crisis scene"
                className="img-fluid rounded"
                style={{ width: "100%", height: 120, objectFit: "cover", userSelect: "none", border: "1px solid #DEE2E6" }}
                draggable={false}
              />
            </figure>
            <figure className="m-0 text-center" style={{ maxWidth: 200 }}>
              <figcaption className="fw-semibold text-muted mb-1 small text-uppercase">After Intervention</figcaption>
              <img
                src={selectedStory?.afterImg}
                alt="After intervention scene"
                className="img-fluid rounded"
                style={{ width: "100%", height: 120, objectFit: "cover", userSelect: "none", border: "1px solid #DEE2E6" }}
                draggable={false}
              />
            </figure>
          </div>
          <p className="mt-4 p-3 rounded" style={{ backgroundColor: "#F8F9FA", borderLeft: "4px solid #0077CC" }}>
            {selectedStory?.description}
          </p>
        </Modal.Body>
        <Modal.Footer className="border-top-0 justify-content-center">
          <Button variant="secondary" onClick={() => setShowStoryModal(false)} className="industrial-btn" style={{backgroundColor: '#6C757D', borderColor: '#6C757D'}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImpactWall;