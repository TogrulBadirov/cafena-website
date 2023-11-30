import React, { useState } from "react";
import "./index.scss";
import { FaPlay } from "react-icons/fa";

const HeroArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="hero-area">
      <div
        className={isModalOpen ? "active video-modal" : "video-modal"}
        onClick={() => setIsModalOpen(false)}
      >
        <button className="close-button">x</button>
        {isModalOpen ? (
          <iframe
            id="cartoonVideo"
            name="iframe_a"
            width="800"
            height="450"
            allowfullscreen
            src="//www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=1&amp;showinfo=0"
          ></iframe>
        ) : (
          ""
        )}
      </div>
        <div className="background-img-left">
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" />
        </div>
        <div className="background-img-right">
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-2.png" alt="" />
        </div>
      <div className="container">
        <div className="contents">
          <div className="hero-content-container">
            <div className="hero-content">
              <h1>
                Distinct
                <br />
                coffee aroma
              </h1>
              <p>
                The coffee is brewed by first roasting the green coffee beans
                over hot coals in a brazier. given an opportunity to sample.
              </p>
              <div>
                <button className="testy">
                  <span>TESTY COFFEE</span>
                </button>
                <button className="read-more">
                  <span>READ MORE</span>
                </button>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://xpressrow.com/html/cafena/cafena/assets/images/hero/hero-img-2-1.png"
              alt="coffee"
            />
              {/* <a
              href="//www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
              target="iframe_a"
            >
              Play
            </a> */}
                <div className="play-button-container">
                <button onClick={() => setIsModalOpen(!isModalOpen)} className="play-button">
                <FaPlay />
                </button>
                <p>Play Video</p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
