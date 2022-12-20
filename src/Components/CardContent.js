import React from "react";
import Slider from "infinite-react-carousel";
import { AiFillHome } from "react-icons/ai";

const CardContent = ({ menuData }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows: true,
  };

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const {
            id,
            name,
            image,
            description,
            BHK,
            location,
            image2,
            image3,
            work,
            price,
            price2,
            Area,
            link,
          } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number  subtle">{BHK}</span>

                    <span className="card-author subtle"> {location}</span>

                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">{work}</div>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}
                  <a href={link} target="_blank" rel="noreferrer">
                    <Slider {...settings}>
                      <div className="row">
                        <img
                          src={image}
                          className="slide_img col-lg-12"
                          alt="Responsive img"
                        />
                      </div>
                      <div className="row">
                        <img
                          src={image2}
                          className="slide_img col-lg-12"
                          alt="Responsive img"
                        />
                      </div>
                      <div className="row">
                        <img
                          src={image3}
                          className="slide_img col-lg-12"
                          alt="Responsive img"
                        />
                      </div>
                    </Slider>
                  </a>
                  <h3>
                    ₹ {price} L - ₹ {price2} L{" "}
                  </h3>
                  <p style={{ color: "#aaa" }}>
                    <AiFillHome color="#454545" /> {Area}
                  </p>
                  <a href={link} target="_blank" rel="noreferrer">
                    <span className="card-tag  subtle">More Details..</span>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CardContent;
