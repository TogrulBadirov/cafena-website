import React from "react";
import SectionHeading from "../../CommonComponents/SectionHeading";
import TopGradeProduct from "../TopGradeProduct";
import "./index.scss";
const TopGradeSection = () => {
  return (
    <div id="top_grade_section">
      <div className="bg_images_1 bg_img">
        <img
          src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/top-grade-shape-2-1.png"
          alt=""
        />
      </div>
      <div className="bg_images_2 bg_img">
        <img
          src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/top-grade-shape-2-2.png"
          alt=""
        />
      </div>

      <div className="container bottom_p top_p top_img_container">
        <SectionHeading
          heading_title="WORLD TOP GRADE"
          heading_sub_title="TOP GRADE"
        />

        <div className="top_grade_content py-4">
          <div className="row">
            <TopGradeProduct
              img="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg"
              num="01"
              title="Americano Grade"
              info=" Curabitur semper erat a lacusey consequat, sit amet quam"
            />

            <TopGradeProduct
              img="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg"
              num="01"
              title="Americano Grade"
              info=" Curabitur semper erat a lacusey consequat, sit amet quam"
            />

            <TopGradeProduct
              img="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg"
              num="01"
              title="Americano Grade"
              info=" Curabitur semper erat a lacusey consequat, sit amet quam"
            />

            <TopGradeProduct
              img="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg"
              num="01"
              title="Americano Grade"
              info=" Curabitur semper erat a lacusey consequat, sit amet quam"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGradeSection;
