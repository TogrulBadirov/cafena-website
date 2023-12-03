import React from "react";
import "./index.scss";
import { IoMdCheckmark } from "react-icons/io";

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <div className="leftImg">
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-1.png"
            alt=""
          />
        </div>
        <div className="rightImg">
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-2.png"
            alt=""
          />
        </div>
        <div className="contentImgs">
          <div className="imgContainer">
            <div className="bigImg">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png"
                alt=""
              />
            </div>
            <div className="smallImg">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="textContent">
          <div className="subTitle">
            <span className="textSubTitle">about cafena</span>
          </div>
          <div className="mainTitle">
            <h2 className="title">
              one of the best coffee house in your home town
            </h2>
          </div>
          <div className="description">
            <p className="initalDesc">
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa
              nibhtincidunt.
            </p>
          </div>
          <div className="listCheck">
            <ul className="checkboxLists">
              <li className="checkboxList">
                <div className="checkbox">
                  <IoMdCheckmark />
                </div>
                <span> What is Lorem Ipsum Lorem Ipsum is simply.</span>
              </li>
              <li className="checkboxList">
                <div className="checkbox">
                  <IoMdCheckmark />
                </div>
                <span> Dummy text of the printing text.</span>
              </li>
              <li className="checkboxList">
                <div className="checkbox">
                  <IoMdCheckmark />
                </div>
                <span>
                 Typesetting industry Lorem Ipsum has been the industry's
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
