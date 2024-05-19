import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../Data/Data";


const Heroes: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  console.log(slidesToShow);
  
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();

    const handleResize = () => {
      updateSlidesToShow();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,

          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto mt-5 p-10">
      <p className="text-center text-secondary text-4xl">Heroes</p>
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="relative h-20 sm:h-32 md:h-28 lg:h-32 rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${d.img})` }}
              />
              <div className="absolute inset-0 bg-secondary bg-opacity-75 flex flex-col items-center justify-center p-4">
                <p className="text-white text-lg font-semibold">{d.name}</p>
                <p className="text-white text-center">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Heroes;
