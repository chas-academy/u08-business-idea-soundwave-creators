
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Album {
  _id: string;
  name: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
}

const PopularAlbum: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get<Album[]>('http://localhost:3000/api/albums');
        setAlbums(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, []);

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
    slidesToShow: slidesToShow,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto mt-5">
      <p className="text-center text-secondary text-4xl">Popular Albums</p>
      <div className="mt-10">
        <Slider {...settings}>
          {albums.map((album) => (
            <div
              key={album._id}
              className="relative h-32 sm:h-32 md:h-28 lg:h-32 rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${album.imageURL})` }}
              />
              <div className="absolute inset-0 bg-transparent bg-opacity-75 flex flex-col items-center justify-center p-4">
                <p className="text-white text-lg font-semibold">{album.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularAlbum;




