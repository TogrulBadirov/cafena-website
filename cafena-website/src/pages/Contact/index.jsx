import React from "react";
import "./index.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="messageBox">
          <div className="cardInfos">
            <div className="cardInfo">
              <div className="cardImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-1.png"
                  alt=""
                />
              </div>
              <div className="cardContent">
                <div className="cardTitle">
                  <h3 className="title">contact us</h3>
                </div>
                <div className="cardDesc">
                  <span>Israfilsupol836@gmail.com</span>
                  <span>088 - 01869018907</span>
                </div>
              </div>
            </div>
            <div className="cardInfo">
              <div className="cardImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-2.png"
                  alt=""
                />
              </div>
              <div className="cardContent">
                <div className="cardTitle">
                  <h3 className="title">Our Location</h3>
                </div>
                <div className="cardDesc">
                  <span>
                    Hera Road 2344-78
                  </span>
                  <span>Australia 897- South Side Melbon</span>
                </div>
              </div>
            </div>
            <div className="cardInfo">
              <div className="cardImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-3.png"
                  alt=""
                />
              </div>
              <div className="cardContent">
                <div className="cardTitle">
                  <h3 className="title">Opening Hours</h3>
                </div>
                <div className="cardDesc">
                  <span>Mon - Sat (8:00 - 6:00)</span>
                  <span>Sunday - Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
