import React from 'react'
import './index.scss'
const TopGradeProduct = ({img,num,title,info,className}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
       <div id='top_grade_product' className={className}>
              <div className="top_grade_product">
                <div className="product_img">
                  <img src={img} />
                  <span className="product_num">{num}</span>
                </div>

                <h4 className="product_name">{title}</h4>
                <p className="product_info">{info}</p>
              </div>
            </div>
    </div>
  )
}

export default TopGradeProduct
