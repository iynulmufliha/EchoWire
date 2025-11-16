import React from "react";


// The images array now uses the Pinterest link for all four items
const images = [
  "https://i.pinimg.com/736x/bf/52/68/bf5268f5fe13372b55af9934fb5c7ba1.jpg",
  "https://i.pinimg.com/1200x/a0/3f/ed/a03fed78a64ceceb6f51bdd92f2ce571.jpg",
  "https://i.pinimg.com/1200x/65/75/30/6575309a580aab4ce0469eb53bbf970f.jpg",
 "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg",
];

const Gallery = () => {
  return (
    <div className="row g-3 h-5 w-5">
      {images.map((img, idx) => (
        <div key={idx} className="col-md-3">
          <img
  src={img}
  alt={`Gallery ${idx}`}
  style={{
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
  }}
/>

        </div>
      ))}
    </div>
  );
};

export default Gallery;