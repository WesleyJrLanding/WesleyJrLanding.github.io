import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { SocialMediaLinks } from "../social-media-links";

import './styles.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <footer className="page_footer mt-24">
      <div className="flex justify-center">
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
      <div className="w-12/12 flex justify-center align-items-center">
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export { Footer };

