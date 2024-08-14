

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';

function Freebook() {
  const [book, setBook] = useState([]);
 
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); // Adjust URL if necessary
        
        const data = res.data.filter((data) => data.category === 'Free');
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 ">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic
          aliquam vitae porro animi quae ipsam expedita placeat inventore
          laudantium fugiat repellendus praesentium, facilis repudiandae doloribus
          amet. Aperiam, doloribus commodi!
        </p>
      </div>
      <Slider {...settings}>
        {book.map((item) => (
          <div key={item._id} className="p-4">
            <Cards item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
