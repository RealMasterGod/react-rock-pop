import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import List from "./components/list/List";

function App() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("All Products");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Best Selling");
  // const handleFilter = e => {
  //   console.log(e.target.textContent)
  // }
  return (
    <>
      <section className="topSection">
        <div className="topSectionWrapper">
          <Navbar />
          <div className="topMiddle">
            <div className="middleLeft">
              <div className="welcomeText">
                <h2>Welcome to</h2>
                <h1>Pop Rock Crystal Shop!</h1>
              </div>
              <p className="describeText">
                Here you will find unique phone accessories, crystals, jewelry
                and more. Free shipping inside the U.S. and our phone grips come
                with a limited warranty. Enjoy!
              </p>
              <div className="buttons">
                <button className="shopNowBtn">SHOP NOW</button>
                <span className="about">about us</span>
              </div>
            </div>
            <Slider />
          </div>
          <div className="topEnd">
            <div className="scrollImg">
              <img src="/scroll.png" alt="" />
            </div>
            <span className="scrollText">scroll down</span>
          </div>
        </div>
        <div className="waveImg"></div>
      </section>
      <section className="productSection">
        <div className="productWrapper">
          <h1 className="productHeading">All products</h1>
          <hr className="Hr" />
          <div className="filters">
            <div className="filter">
              <span className="filterText">Filter:</span>
              <div className="filterOptions">
                <span className="filterValue">{filterValue}</span>
                <span
                  className={"selectButton"}
                  onClick={() => setFilterOpen((prev) => !prev)}
                >
                  <img src="/downArrow.png" alt="" />
                </span>
                <ul
                  onClick={(e) => {
                    setFilterValue(e.target.textContent);
                    setFilterOpen((prev) => !prev);
                  }}
                  className={!filterOpen ? "optionsClose" : "optionsOpen"}
                >
                  <li>All Products</li>
                  <li>Most Liked</li>
                  <li>New</li>
                  <li>Some</li>
                </ul>
              </div>
            </div>
            <div className="sort">
              <span className="filterText">Sort:</span>
              <div className="filterOptions">
                <span className="filterValue">{sortValue}</span>
                <span
                  className={"selectButton"}
                  onClick={() => setSortOpen((prev) => !prev)}
                >
                  <img src="/downArrow.png" alt="" />
                </span>
                <ul
                  onClick={(e) => {
                    setSortValue(e.target.textContent);
                    setSortOpen((prev) => !prev);
                  }}
                  className={!sortOpen ? "optionsClose" : "optionsOpen"}
                >
                  <li>Best Selling</li>
                  <li>Cheapest</li>
                  <li>Fanciest</li>
                  <li>Some</li>
                </ul>
              </div>
            </div>
          </div>
          <List />
          <button className="viewAllBtn">View All</button>
        </div>
      </section>
      <section className="endSection">
        <div className="outerDiv">
        <div className="left">
        <div className="endInfo">
            <div className="productInformation">
              <h2>BEST PRICE</h2>
              <h1>Agate Phone Grip</h1>
            </div>
            <div className="priceInfo">
              <span>44.50$</span>
              <span>19.50$</span>
            </div>
            <p className="productDesc">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
            <button className="buyProductButton">BUY NOW</button>
          </div>
        </div>
        <div className="right">
          <div className="rightOuter">
            <div className="middleCircle"></div>
            <img src="/foodItem.png" alt="" className="foodImg"/>
            <img className="ellipseImg" src="/transparentShape.png" alt="" />
          </div>
        </div>
        </div>
        <div className="endWaveImg"></div>
      </section>
    </>
  );
}

export default App;
