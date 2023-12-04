import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/UseFetch";
import SectionHeading from "../../CommonComponents/SectionHeading";
import SpecialMenuCards from "../SpecialMenuCards";
import "./index.scss";
const SpecialMenuSection = () => {
  const { data:categoryData }=useFetch('http://localhost:3000/category')
  const { data:productData }=useFetch('http://localhost:3000/products')
  const [filteredData, setfilteredData] = useState(productData)
  const [filterValue, setFilterValue] = useState("All")
  // const handleFilter = ()=>{
  //   setfilteredData(productData.filter(x=>x.categoryId.includes(filterValue)))
  //   console.log(filteredData);
  // }
  useEffect(() => {
    filterValue !== "All" ? setfilteredData(productData.filter(x=>x.categoryId.includes(parseInt(filterValue)))) : setfilteredData(productData)
  }, [filterValue,productData])
  
  return (
    <div id="special_menu">
      <div className="container">
        <SectionHeading
          heading_title="CAFENA POPULAR MENU"
          heading_sub_title="SPECIAL MENU"
        />

        <div className="special_menu_content">
            <div className="menu_buttons">
              <button  onClick={()=>setFilterValue("All")}>all</button>
              {
                categoryData && categoryData.map(item=>(
                  <button value={item.id} onClick={(e)=>setFilterValue(e.target.value)}>{item.categoryName}</button>
                ))
              }
            </div>

            
            <SpecialMenuCards filteredProductData={filteredData}/>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuSection;
