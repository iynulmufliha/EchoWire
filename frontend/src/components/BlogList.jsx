import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container, Modal, Button } from 'react-bootstrap';

const blogsData = [
  {
    id: 1,
    title: "Gaza Crisis: Ceasefire Violations Amid Aid Blockades",
    description: "Despite a fragile ceasefire, clashes continue in Gaza, with severe restrictions on humanitarian aid affecting thousands.",
    image: "https://i.pinimg.com/736x/1f/85/ec/1f85ec1b2a03aed94b6a9729bad5eeba.jpg",
    link: "https://www.theguardian.com/world/live/2025/oct/16/gaza-ceasefire-israel-hamas-palestine-rafah-hostages-live-news-updates"
  },
  {
    id: 2,
    title: "Sudan's Darfur: Escalating Violence and Displacement",
    description: "Ongoing conflict in Darfur has forced millions to flee, creating urgent humanitarian needs across the region.",
    image: "https://i.pinimg.com/1200x/d0/b0/2c/d0b02c3a1724f9a09e8f7e117964fc04.jpg",
    link: "https://reliefweb.int/report/sudan/surviving-siege-voices-el-fasher-sudan-october-15-2025"
  },
  {
    id: 3,
    title: "Yemen: Houthi Attacks on UN Aid Facilities",
    description: "Houthi raids on UN facilities in Sanaa have disrupted aid delivery and endangered humanitarian workers.",
    image: "https://i.pinimg.com/1200x/5e/fb/ae/5efbae757e1c4a6b3d132e7cbc5b3967.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Houthi_raids_on_UN_buildings_in_Sanaa"
  },
  {
    id: 4,
    title: "South Sudan: Fangak Hospital Bombing",
    description: "A bombing at a Médecins Sans Frontières hospital in Fangak caused multiple casualties, highlighting the dangers to healthcare facilities.",
    image: "https://i.pinimg.com/1200x/ea/b1/ab/eab1ab83a42f050a3f5f2aaebb7e025a.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Fangak_bombing"
  },
  {
    id: 5,
    title: "Sudan: Cholera Epidemic Amid Conflict",
    description: "Sudan faces a severe cholera outbreak, worsened by ongoing conflict and displacement across affected areas.",
    image: "https://i.pinimg.com/736x/cf/c6/77/cfc677eeb48e087d565148077f023b03.jpg",
    link: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Sudanese_cholera_epidemic"
  },
  {
    id: 6,
    title: "Haiti: Record Displacement Due to Violence",
    description: "Widespread violence in Haiti has displaced over 1.4 million people, creating urgent humanitarian challenges.",
    image: "https://www.iom.int/sites/g/files/tmzbdl2616/files/styles/large_900_image_crop/public/press_release/media/2025-10/20241122-a7r01235-p.jpg?h=bc09f3d1&itok=1024M001",
    link: "https://www.iom.int/news/displacement-haiti-reaches-record-high-14-million-people-flee-violence"
  },
  {
    id: 7,
    title: "Ethiopia: Refugee Crisis and Aid Shortages",
    description: "Cuts in aid and resources have pushed Ethiopian refugee camps to the brink of humanitarian collapse.",
    image: "https://i.pinimg.com/1200x/b6/1f/82/b61f824f8ebb6dcf6d5aeb682c89ee3b.jpg",
    link: "https://x.com/clashreport/status/1977819084768039195"
  },
  {
    id: 8,
    title: "Gaza: Aid Distribution Killings",
    description: "Aid distribution in Gaza has resulted in tragic civilian casualties, intensifying the humanitarian crisis.",
    image: "https://i.pinimg.com/1200x/b1/ec/a8/b1eca8c322e43f45661e3a8d167db1eb.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Gaza_Strip_aid_distribution_killings"
  },
  {
    id: 9,
    title: "Democratic Republic of Congo: Escalating Attacks",
    description: "Violence in eastern DRC has displaced over 700,000 people, worsening the ongoing humanitarian emergency.",
    image: "https://i.pinimg.com/1200x/b3/28/a8/b328a823b37e5bffbcf0770ddb632c33.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Democratic_Republic_of_the_Congo_attacks"
  },
  {
    id: 10,
    title: "Sudan: Hospital Attack in El Fasher",
    description: "A drone strike on a hospital in El Fasher caused numerous casualties, emphasizing risks to healthcare in conflict zones.",
    image: "https://i.pinimg.com/736x/03/b2/65/03b2650a668ff345443cf4fb4a993797.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Saudi_Hospital_Attack"
  },
  {
    id: 11,
    title: "Gaza: Humanitarian Situation Update",
    description: "Access to aid in Gaza remains limited, leaving civilians with severe shortages amid ongoing conflict.",
    image: "https://i.pinimg.com/1200x/b1/5d/95/b15d95e31ee0a5f847219dd885f19acb.jpg",
    link: "https://reliefweb.int/report/occupied-palestinian-territory/humanitarian-situation-update-329-gaza-strip"
  },
  {
    id: 12,
    title: "Sudan: Cholera Outbreak in Refugee Camps",
    description: "Cholera is spreading rapidly in refugee camps, with thousands affected and scarce medical resources available.",
    image: "https://i.pinimg.com/1200x/fe/b7/d9/feb7d9fdec5262ec80c9f1dbf4f084b3.jpg",
    link: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Sudanese_cholera_epidemic"
  },
  {
    id: 13,
    title: "Ukraine : Ongoing war & humanitarian impact",
    description: "The war in Ukraine continues to generate major humanitarian needs: over 12.7 million people in Ukraine are estimated to require humanitarian aid in 2025.",
    image: "https://www.unhcr.org/sites/default/files/styles/landscape_10/public/RF1204044.jpg?h=9b6fab88&itok=32W_Sshv",
    link: "https://www.who.int/emergencies/funding/health-emergency-appeals/2025/2025-appeals?utm_source=chatgpt.com"
  },
  {
    id: 14,
    title: "Ethiopia: Refugee Camps at Breaking Point",
    description: "Over 1 million refugees in Ethiopia face hunger and aid shortages, placing camps at critical risk.",
    image: "https://i.pinimg.com/736x/6c/98/e3/6c98e3a877f85997b92dbc5c89a01761.jpg",
    link: "https://x.com/clashreport/status/1977819084768039195"
  },
  {
    id: 15,
    title: "Gaza: Famine and Humanitarian Crisis",
    description: "Gaza has been declared a famine zone, with over 2 million people facing extreme hunger and malnutrition.",
    image: "https://i.pinimg.com/736x/46/da/ff/46dafff53903045c0d0add35cb9894b9.jpg",
    link: "https://www.redcross.org.uk/stories/disasters-and-emergencies/world/whats-happening-in-gaza-humanitarian-crisis-grows"
  },
  {
    id: 16,
    title: "Afghanistan : Severe hunger & economic collapse",
    description: "In 2025 Afghanistan is experiencing one of the worst hunger crises: more than 10 million people reportedly need food assistance and millions of children are severely malnourished.",
    image: "https://i.pinimg.com/1200x/49/49/37/4949376051f3237b5c1c7a6eed581aa2.jpg",
    link: "https://wfpusa.org/place/afghanistan/"
  },
  {
    id: 17,
    title: "Global scale: Food insecurity driven by conflict & climate",
    description: "Global efforts are underway to support over 1.4 million displaced people in Haiti facing critical shortages.",
    image: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2025/05/unddr.jpg",
    link: "https://www.bing.com/ck/a?!&&p=805d8c301a589b2ee794ff95c7f29559c8e1deb6a0f9247617d0698997882e38JmltdHM9MTc2MjkwNTYwMA&ptn=3&ver=2&hsh=4&fclid=05b3d513-f7a7-68f1-1f29-c0a7f672691a&psq=Global+scale%3a+Food+insecurity+driven+by+conflict+%26+climate&u=a1aHR0cHM6Ly93d3cud2ZwLm9yZy9wdWJsaWNhdGlvbnMvZ2xvYmFsLXJlcG9ydC1mb29kLWNyaXNlcy1ncmZj"
  },
  {
    id: 18,
    title: "Syria : Hunger and food insecurity crisis",
    description: "Over 14.5 million Syrians face food insecurity; about 9.1 million in ‘acute crisis’.",
    image: "https://i.pinimg.com/736x/5e/2c/8a/5e2c8ac90145b5077a2d3f3f26677275.jpg",
    link: "https://en.wikipedia.org/wiki/Hunger_in_Syria"
  },
  {
    id: 19,
    title: "Gaza: Humanitarian Aid Distribution Challenges",
    description: "Aid distribution in Gaza faces obstacles from damaged infrastructure and ongoing conflict, limiting relief efforts.",
    image: "https://i.pinimg.com/1200x/14/aa/33/14aa33be8e8ed858e74cc0d54e6cfc04.jpg",
    link: "https://reliefweb.int/report/occupied-palestinian-territory/humanitarian-situation-update-329-gaza-strip"
  },
  {
    id: 20,
    title: "Sudan: Emergency Relief Efforts Intensify",
    description: "International organizations are scaling up relief operations, providing essentials to those affected by conflict and epidemics.",
    image: "https://i.pinimg.com/736x/49/a5/2a/49a52a06977a98d869ea3cda58e3a3de.jpg",
    link: "https://reliefweb.int/report/sudan/emergency-relief-efforts-intensify"
  }
];



const BlogList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };


  return (
    <>
      <Container className="mt-5">
        <Row className="g-4 justify-content-center">
          {blogsData.map(blog => (
            <Col key={blog.id} xl={3} lg={4} md={6} sm={12}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderRadius: "12px",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  backgroundColor: "#fdfdfd",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}
                onClick={() => handleCardClick(blog)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                {/* Title on top */}
                <Card.Body style={{ paddingBottom: "0.5rem" }}>
                  <Card.Title style={{ fontSize: "1rem", fontWeight: 700, color: "#222", marginBottom: "0.5rem" }}>
                    {blog.title}
                  </Card.Title>
                </Card.Body>

                {/* Square image */}
                <div style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Description */}
                <Card.Body style={{ flexGrow: 1 }}>
                  <Card.Text
                    style={{
                      fontSize: "0.85rem",
                      color: "#555",
                      lineHeight: 1.5,
                      textAlign: "justify"
                    }}
                  >
                    {blog.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        {selectedBlog && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                style={{ width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }}
              />
              <p style={{ fontSize: "1rem", color: "#444", lineHeight: 1.6, textAlign: "justify" }}>
                {selectedBlog.description}
              </p>
              <a href={selectedBlog.link} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", fontWeight: 500 }}>
                Read full article
              </a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default BlogList;