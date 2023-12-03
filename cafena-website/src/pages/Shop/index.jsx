import React, { useState, useEffect } from "react";
import "./index.scss";
import ShopProduct from "../../components/ShopPageComponents/ShopProduct";
import useFetch from "../../hooks/UseFetch";
import { FaTh, FaList } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import ShopProductDetailModal from "../../components/ShopPageComponents/ShopProductDetailModal";

const minDistance = 10;

const Shop = () => {
  const { data, loading } = useFetch("http://localhost:3000/products");
  const [view, setView] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [sortOrder, setSortOrder] = useState("id");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [value1, setValue1] = useState([0, 450]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredItems = data
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((item) => selectedCategory === "All" || item.categoryId.includes(parseInt(selectedCategory)) )
    .filter(
      (item) =>
        (!value1[0] || item.price >= value1[0]) &&
        (!value1[1] || item.price <= value1[1])
    );

  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const sortedItems = [...filteredItems].sort((a, b) => {
    const first = a.title.toLowerCase();
    const last = b.title.toLowerCase();
    if (sortOrder === "asc") {
      return first < last ? -1 : 1;
    } else if (sortOrder === "desc") {
      return first > last ? -1 : 1;
    } else {
      return a.id - b.id;
    }
  });

  const displayedItems = sortedItems.slice(startIndex, endIndex);

  const totalPages = [];
  for (let i = 1; i <= Math.ceil(sortedItems.length / itemsPerPage); i++) {
    totalPages.push(i);
  }

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeSortOrder = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const renderPageNumbers = totalPages.map((number) => (
    <button key={number} onClick={() => changePage(number)}>
      {number}
    </button>
  ));

  return (
    <main>
      <ShopProductDetailModal nav={'/shop'} />
      <section id="breadcrumb"></section>
      <section id="shop-products">
        <div className="container">
          <div className="product-sort">
            <div>
              <p>
                Showing {startIndex + 1}-{Math.min(endIndex, sortedItems.length)} of {sortedItems.length} results
              </p>
            </div>
            <div>
              <button onClick={() => setView(4)}>
                <FaTh />
              </button>
              <button onClick={() => setView(12)}>
                <FaList />
              </button>
              <select name="" id="" onChange={changeSortOrder}>
                <option value="id">Sort by New</option>
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="products-container col-lg-8">
              <div className="row">
                {displayedItems.map((item) => (
                  <ShopProduct key={item.id} props={{ view }} title={item.title} price={item.price} item={item} />
                ))}
              </div>
              {totalPages.length > 1 && <div className="pagination">{renderPageNumbers}</div>}
            </div>
            <div className="filters col-lg-4">
              <div className="search-filter">
                <h4>Search Here</h4>
                <input type="text" value={searchValue} onChange={handleSearch} placeholder="Search Product" />
              </div>
              <div className="category-filter">
                <h4>Categories</h4>
                <button value="All" onClick={handleCategoryChange}>All</button>
                <button value="1" onClick={handleCategoryChange}>Chocolate</button>
                <button value="2" onClick={handleCategoryChange}>Coffee</button>
                <button value="3" onClick={handleCategoryChange}>Sweets</button>
                <button value="4" onClick={handleCategoryChange}>Black Tea</button>
                <button value="5" onClick={handleCategoryChange}>Green Tea</button>
              </div>
              <div className="price-filter">
                <h4>Price Filter:</h4>
                <Slider
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="on"
                  valueLabelFormat={(value) => `$${value}`}
                  min={0}
                  max={450}
                  getAriaLabel={() => "Minimum distance"}
          disableSwap
          color="warning"
          sx={{
            color: "#C7A17A",
            "& .MuiSlider-thumb": {
              width: 300,
              borderRadius: "0%",
              width: "5px",
              height: "20px",
            },
          }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
