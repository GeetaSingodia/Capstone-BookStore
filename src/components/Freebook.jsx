

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.category === "Free");
        setList(filteredData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 m-20">
      <h1 className="font-semibold text-xl pb-2">Free Books</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic
        aliquam vitae porro animi quae ipsam expedita placeat inventore
        laudantium fugiat repellendus praesentium, facilis repudiandae doloribus
        amet. Aperiam, doloribus commodi!
      </p>
      <Slider {...settings} className="my-slider">
        {list.map((book) => (
          <div key={book.id} className="p-4">
            <div className="card bg-base-100 w-72 shadow-xl">
              <figure>
                <img src={book.image} alt={book.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.name}
                  <div className="badge badge-secondary">{book.category}</div>
                </h2>
                <p>{book.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
