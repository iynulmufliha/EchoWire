import React from "react";
import styled from "styled-components";

const podcastData = [
  {
    title: "Podcast",
    episodes: [
      "https://open.spotify.com/embed/episode/4VRWGt3TzPeOstEDjDx0jr",
     
      "https://open.spotify.com/embed/episode/5kvYCa2ZFauPAh8IlJk0iz",
      "https://open.spotify.com/embed/episode/1LokwWun2z25nMa3rcUfti",
      
    ],
  },
  {
    title: "Podcast",
    episodes: [
      "https://open.spotify.com/embed/episode/3YmN5SHGaMNt2RsBTwXFpt",
      "https://open.spotify.com/embed/episode/1T8ws1PHZfnZkklweGlNfd",
      "https://open.spotify.com/embed/episode/18585HFemTI6Qc8GphSvNA",
    ],
  },
  // Add more cards similarly
];

const SpotifyGrid = () => {
  return (
    <GridWrapper>
      {podcastData.map((card, idx) => (
        <Card key={idx}>
          <CardTitle>{card.title}</CardTitle>
          {card.episodes.map((ep, i) => (
            <EpisodeWrapper key={i}>
              <iframe
                src={ep}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px" }}
                title={`episode-${i}`}
              ></iframe>
            </EpisodeWrapper>
          ))}
        </Card>
      ))}
    </GridWrapper>
  );
};

export default SpotifyGrid;

// Styled Components
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #121212; // Spotify dark theme
  color: white;
  border-radius: 12px;
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const EpisodeWrapper = styled.div`
  margin-bottom: 10px;
`;
