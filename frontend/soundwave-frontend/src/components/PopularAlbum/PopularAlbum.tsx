import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../Data/Data";

const PopularAlbum: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  console.log(slidesToShow)
  

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
    slidesToShow: 4,
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
      <p className="text-center text-secondary text-4xl">Popular Album</p>
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="relative h-32 sm:h-32 md:h-28 lg:h-32 rounded-xl overflow-hidden"
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



export default PopularAlbum;

/*import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from 'axios';
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
        const res = await axios.get<Album[]>('/api/albums');
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
      <p className="text-center text-secondary text-4xl">Popular Album</p>
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
              <div className="absolute inset-0 bg-secondary bg-opacity-75 flex flex-col items-center justify-center p-4">
                <p className="text-white text-lg font-semibold">{album.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularAlbum;*/

/*import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from 'axios';
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
        const res = await axios.get('/api/albums');
        console.log('API response:', res.data);
        if (Array.isArray(res.data)) {
          setAlbums(res.data);
        } else {
          console.error('API response is not an array:', res.data);
        }
      } catch (err) {
        console.error('Error fetching albums:', err);
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

  if (!Array.isArray(albums)) {
    console.error('albums is not an array:', albums);
    return <div>Error: Albums data is not in the expected format.</div>;
  }

  return (
    <div className="w-3/4 m-auto mt-5">
      <p className="text-center text-secondary text-4xl">Popular Album</p>
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
              <div className="absolute inset-0 bg-secondary bg-opacity-75 flex flex-col items-center justify-center p-4">
                <p className="text-white text-lg font-semibold">{album.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularAlbum;*/

/*import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from 'axios';
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
        const res = await axios.get<Album[]>('http://localhost:3000/api/albums');  // Update URL if needed
        console.log('API response:', res.data);
        if (Array.isArray(res.data)) {
          setAlbums(res.data);
        } else {
          console.error('API response is not an array:', res.data);
        }
      } catch (err) {
        console.error('Error fetching albums:', err);
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

  if (!Array.isArray(albums)) {
    console.error('albums is not an array:', albums);
    return <div>Error: Albums data is not in the expected format.</div>;
  }

  return (
    <div className="w-3/4 m-auto mt-5">
      <p className="text-center text-secondary text-4xl">Popular Album</p>
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
              <div className="absolute inset-0 bg-secondary bg-opacity-75 flex flex-col items-center justify-center p-4">
                <p className="text-white text-lg font-semibold">{album.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularAlbum;*/



