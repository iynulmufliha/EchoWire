import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      {/* ✅ HERO SECTION with Video */}
      <section className="hero-section">
        <video autoPlay muted loop className="background-video">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="overlay">
          <h1>
            <strong>CRISIS</strong> TO <strong>RESILIENCE</strong>
          </h1><strong>
<p className="text-dark ">
            At a time when disasters and disruptions are becoming more common
            and catastrophic, <br />
            Global Communities, together with our local partners, equips
            communities <br />
            with the training, tools and resources they need to recover from
            crises and build long-term resilience in the face of constant
            change.
          </p>
          </strong>
          
          <button className="subscribe-button">
            Subscribe for updates on our Crisis To Resilience series
          </button>
        </div>
      </section>

      {/* ✅ QUOTE SECTION */}
      <section className="quote-section">
        <p>
          From prevention and adaptation to positive transformation, we focus{" "}
          <br />
          on solutions that center local voices and expand opportunities for{" "}
          <br />
          growth, leadership and advancement.
        </p>
      </section>

      {/* ✅ NEWS SECTION */}
      <section className="news-section">
        <div className="tabs">
          <button className="active-tab">Triple Nexus</button>
          <button>Localization</button>
        </div>

        <div className="news-list">
          <div className="news-item">
            <img
              src="https://th.bing.com/th/id/R.4bd0e8ee541e7af4910a2ded9d906371?rik=ZLpnbBD7B45rUQ&riu=http%3a%2f%2fbuzznigeria.com%2fwp-content%2fuploads%2f2016%2f11%2f2017-famine-imminent.jpg&ehk=CnTyEzFQPXo6y6C8YXVuhPY3ayHSdgg5oilEzHdc%2byA%3d&risl=&pid=ImgRaw&r=0"
              alt="news"
            />
            <div>
              <h3>Conflict and Famine in South Sudan</h3>
              <p>
                Communities are torn apart by civil war, drought, and economic collapse. Families often have to choose between fleeing violence or staying and risking starvation.
              </p>
            </div>
          </div>

          <div className="news-item">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.hnVtlH7jLeGM4RZP6y4VsgHaED?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="news"
            />
            <div>
              <h3>Hunger, Malnutrition, and Resilience in Sub-Saharan Africa</h3>
              <p>Children and families are enduring severe food shortages. Communities are finding innovative ways to fight hunger and build food security.
</p>
            </div>
          </div>

          <div className="news-item">
           <img src="https://media.cnn.com/api/v1/images/stellar/prod/230815093502-afghan-women-protest.jpg?c=16x9&q=h_833,w_1480,c_fill" alt="Afganistan news" />
             <div>
              <h3>Governing in Crisis: The Struggle of Afghanistan</h3>
              <p>
                Political instability and lack of infrastructure have left millions vulnerable. Local initiatives aim to restore education and economic opportunity.

              </p>
            </div>
          </div>

          <div className="news-item">
            <img src="https://static01.nyt.com/images/2024/01/24/multimedia/24israel-hamas-us-strikes-yemen-tbfj/24israel-hamas-us-strikes-yemen-tbfj-videoSixteenByNine3000.jpg" alt="news" />
             <div>
              <h3>Breaking New Ground in Yemen</h3>
              <p>
               Years of conflict have left millions in humanitarian need. Aid efforts focus on food security, health, and rebuilding shattered communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ PARALLAX SECTION 1 (Hero Image + Text from Hero.js) */}
      <section className="pimg1">
        <div className="hero-overlay">
          {/* Logo */}

          {/* Heading */}
          <h1 >Triple Nexus</h1>
          <h3>Strengthening Linkages Across the Triple Nexus</h3>

          {/* Description */}
          <p>
            Global Communities believes meaningful solutions lie at the
            intersections that link humanitarian, development and peace-building
            programs — also known as the triple nexus. Our unique expertise
            allows us to leverage learnings for integrated programs and respond
            to rapidly changing circumstances.
          </p>

          {/* Button */}
          <button className="hero-btn">Read About Triple Nexus</button>
        </div>
      </section>

      {/* ✅ LIGHT CONTENT SECTION */}
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container">
    <h2 className="fw-bold text-center text-dark mb-4">
      Explore Triple Nexus Stories
    </h2>
    <div className="row g-4 justify-content-center">
      
      {/* CARD DATA */}
      {[
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.4SIrM63bylsKuuHWf2fj9gHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Armed conflict and recurring droughts have left millions in Somalia struggling for food and safety. Humanitarian efforts continue despite severe challenges."
        },
        {
          img: "https://gdb.rferl.org/049b0000-0aff-0242-3a85-08da16f35d96_cx0_cy8_cw0_w1200_r1.jpg",
          text: "The war in Ukraine has displaced millions, forcing families to rebuild their lives across borders in harsh conditions."
        },
        {
          img: "https://tse2.mm.bing.net/th/id/OIP.tCtDJHi1N2GNfMoT_hc1WQHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Venezuela’s economic collapse has left citizens in survival mode, relying on local networks for food and medicine."
        },
        {
          img: "https://i.natgeofe.com/n/adb664d9-8461-48ce-873d-c2f39f7cd56d/STOCK_MM10038_HKCD4052.JPG",
          text: "In the Congo, women face the brunt of violence yet lead initiatives for community healing and peace."
        },
      ].map((card, i) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
          <div
            className="position-relative overflow-hidden h-100"
            style={{
              borderRadius: "14px",
              padding: "2px", // border space
            }}
          >
            {/* Animated border blob */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "14px",
                boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "green",
                  filter: "blur(12px)",
                  opacity: 0.5,
                  transform: "translate(-50%, -50%)",
                  animation: "blobMove 5s infinite ease-in-out",
                }}
              ></div>
            </div>

            {/* Actual Card */}
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "12px",
                backgroundColor: "#fff",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src={card.img}
                alt="story"
                className="card-img-top"
                style={{
                  height: "130px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div className="card-body p-3">
                <p className="card-text text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Inline keyframes for blob animation */}
  <style>
    {`
      @keyframes blobMove {
        0% { transform: translate(-50%, -50%) translate(0, 0); }
        25% { transform: translate(-50%, -50%) translate(60px, 0); }
        50% { transform: translate(-50%, -50%) translate(60px, 60px); }
        75% { transform: translate(-50%, -50%) translate(0, 60px); }
        100% { transform: translate(-50%, -50%) translate(0, 0); }
      }
    `}
  </style>
</section>


      {/* ✅ PARALLAX SECTION 2 */}
      <section className="pimg2">
        <div className="hero-overlay">
          {/* Logo */}

          {/* Heading */}
          <h1>Localization</h1>
          <h3>Advancing Locally-Led Solutions</h3>

          {/* Description */}
          <p>
           The complex challenges facing communities around the world require customized,
            locally owned solutions. Global Communities does not believe in a one-size-fits-all 
            approach and is committed to advancing the localization of our work through a wide range of models.
          </p>

          {/* Button */}
          <button className="hero-btn">Read More About Localization</button>
        </div>
      </section>

      {/* ✅ DARK SECTION */}
      <section className="section section-dark">
        <div className="container">
      {/* Blue Subscription Section */}
      <div className="subscribe-section">
        <h2>Subscribe to get updates on our<br />Crisis to Resilience series</h2>
        <p>
          Once you submit this form, you will receive an email to confirm this process. 
          (Please be sure to check your spam folder and add us to your safe sender list.) 
          Simply click on the link to subscribe to our list!
        </p>

        <form className="form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>

        <p className="small-text">
          By signing up, you agree to Global Communities'{" "}
          <a href="#">Privacy Policy</a>. This site is protected by reCAPTCHA and 
          the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
        </p>
      </div>
      </div>

      </section> 

    

    
      <section className="section section-dark">
        {/* Grey Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Home</h4>
            <a href="#">Our Work</a>
            <a href="#">Global Reach</a>
            <a href="#">Contact Us</a>
            <a href= "#">Privacy Policy</a>
          </div>
          <div>
            <h4>About Us</h4>
            <a href="#">History</a>
            <a href="#">Annual Reports</a>
            <a href="#">Financials</a>
          </div>
          <div>
            <h4>News</h4>
            <a href="#">Blog</a>
            <a href="#">Press Releases</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#">Briefs & Case Studies</a>
            <a href="#">Capacity Materials</a>
            <a href="#">Digital Media</a>
            <a href="#">Research & Publications</a>
            <a href="#">Toolkits & Manuals</a>
          </div>
          <div>
            <h4>Join Us</h4>
            <a href="#">Careers</a>
            <a href="#">Partner</a>
            <a href="#">Ways to Give</a>
            <a href="#">Events</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">🔗</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">📘</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">📸</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">▶</a>
          </div>
          <p>pn - 7974864081</p>
          <p>© 2025 EchoWire Global Communities. All rights reserved.</p>
          <p>Website by <a href="#">M.A.M</a></p>
        </div>
      </footer>

      </section>
    </div>
    
  );
}

export default Home;