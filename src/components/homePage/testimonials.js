import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonialsData = [
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      logo: "user1_logo.png",
    },
    {
      text:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Jane Smith",
      logo: "user2_logo.png",
    },
    {
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Alex Johnson",
      logo: "user3_logo.png",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      <p className="sub-heading">See what our customers are saying</p>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-signature">
              <p className="testimonial-author">{testimonial.name}</p>
              <img
                src={testimonial.logo}
                alt={testimonial.name}
                className="testimonial-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
