import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");
  const dynamicTitle = pathSegments[pathSegments.length - 1];
  return (
    <div className="bread_crumbs">
      <div>
        <img
          src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png"
          alt=""
          className="bread_img img1"
        />
      </div>
      <h2 className="bread_crumbs_title">{dynamicTitle} Caffena</h2>

      <div className="bread_crumb_link">
        <Link to={"/"}>Home / </Link>
        {pathSegments.map((crumb, index) => (
          <React.Fragment key={crumb}>
            <Link to={`/${pathSegments.slice(0, index + 1).join("/")}`}>
              {crumb}
            </Link>
            {index < pathSegments.length - 1 && <span> / </span>}
          </React.Fragment>
        ))}
      </div>
      <div>
        <img
          src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png"
          alt=""
          className="bread_img img2"
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;
