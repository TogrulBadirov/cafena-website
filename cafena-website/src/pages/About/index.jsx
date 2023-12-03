import React from "react";
import "./index.scss";
import { FaLongArrowAltRight, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import AboutUs from "../../components/AboutUsPageComponents/AboutUs";
import { FiPlus } from "react-icons/fi";
const About = () => {
  return (
    <>
      <AboutUs />
      <section id="About">
        <div className="container">
          <div className="whyChooseUs">
            <div className="title">
              <div className="subTitle">
                <span className="subtitle">why choose us</span>
              </div>
              <div className="mainTitle">
                <h2>
                  We are Provide Best Service
                  <br />
                  in your city
                </h2>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="img">
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png"
                    alt=""
                  />
                </div>
                <div className="cardTitle">
                  <h2>testy coffee recipe</h2>
                </div>
                <div className="cardDesc">
                  <p className="description">
                    Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis.
                    Aliquam erat volutpat. Aenean accumsany.
                  </p>
                </div>
                <div className="cardBtn">
                  <button>
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png"
                    alt=""
                  />
                </div>
                <div className="cardTitle">
                  <h2>great location</h2>
                </div>
                <div className="cardDesc">
                  <p className="description">
                    Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis.
                    Aliquam erat volutpat. Aenean accumsany.
                  </p>
                </div>
                <div className="cardBtn">
                  <button>
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png"
                    alt=""
                  />
                </div>
                <div className="cardTitle">
                  <h2>Professional Chef</h2>
                </div>
                <div className="cardDesc">
                  <p className="description">
                    Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis.
                    Aliquam erat volutpat. Aenean accumsany.
                  </p>
                </div>
                <div className="cardBtn">
                  <button>
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bestCoffee">
        <div className="bgCoffee">
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/bg/best-coffe-1.jpeg"
            alt=""
          />
          <div className="container">
            <div className="textBox">
              <div className="textBoxTitle">
                <h2>Try the best coffee in the housing city</h2>
              </div>
              <div className="textBoxDesc">
                <p className="initialDesc">
                  Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod
                  nisl suscipit ligula volutpat, a feugiat urna maximus. Cras
                  massa nibhtincidunt.
                </p>
                <p className="secondDesc">
                  Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                  quam quis quam venenatis fringilla. Morbi vestibulum id tellus
                  mmodo mattis. Aliquam erat volutpat. Aenean
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="OurChef">
        <div className="container">
          <div className="title">
            <div className="subTitle">
              <span>our chef</span>
            </div>
            <div className="mainTitle">
              <h2>meet our professional</h2>
            </div>
          </div>
          <div className="ourChefCards">
            <div className="ourChefCard">
              <div className="cardImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg"
                  alt=""
                />
                <div className="cardSocialLink">
                  <div className="icon">
                    <button>
                      <FiPlus />
                    </button>
                  </div>
                  <ul className="linkList">
                    <li className="facebook">
                      <button><FaFacebookF /></button>
                      </li>
                    <li>
                      <button className="twitter"><FaTwitter /></button>
                      </li>
                    <li>
                      <button className="pinterest"><FaPinterestP /></button>
                      </li>
                    <li>
                      <button className="linkedin"><FaLinkedinIn /></button>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="cardName">
                <h4 className="name">Rasalina de willamson</h4>
              </div>
              <div className="cardInfo">
                <span className="info">12 year experience</span>
              </div>
            </div>
            <div className="ourChefCard">
              <div className="cardImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-2.jpeg"
                  alt=""
                />
                <div className="cardSocialLink">
                  <div className="icon">
                    <button>
                      <FiPlus />
                    </button>
                  </div>
                  <ul className="linkList">
                    <li className="facebook">
                      <button><FaFacebookF /></button>
                      </li>
                    <li>
                      <button className="twitter"><FaTwitter /></button>
                      </li>
                    <li>
                      <button className="pinterest"><FaPinterestP /></button>
                      </li>
                    <li>
                      <button className="linkedin"><FaLinkedinIn /></button>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="cardName">
                <h4 className="name">Alextina Jimiey</h4>
              </div>
              <div className="cardInfo">
                <span className="info">09 year experience</span>
              </div>
            </div>
            <div className="ourChefCard">
              <div className="cardImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg"
                  alt=""
                />
                <div className="cardSocialLink">
                  <div className="icon">
                    <button>
                      <FiPlus />
                    </button>
                  </div>
                  <ul className="linkList">
                    <li className="facebook">
                      <button><FaFacebookF /></button>
                      </li>
                    <li>
                      <button className="twitter"><FaTwitter /></button>
                      </li>
                    <li>
                      <button className="pinterest"><FaPinterestP /></button>
                      </li>
                    <li>
                      <button className="linkedin"><FaLinkedinIn /></button>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="cardName">
                <h4 className="name">Jimmey Aenderson</h4>
              </div>
              <div className="cardInfo">
                <span className="info">05 year experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
