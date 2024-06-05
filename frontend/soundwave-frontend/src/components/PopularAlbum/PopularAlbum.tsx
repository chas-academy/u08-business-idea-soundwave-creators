import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchPopularAlbums, Album } from "../../api/HomePageApi";

const PopularAlbum: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const fetchedAlbums = await fetchPopularAlbums();
        setAlbums(fetchedAlbums);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, []);

  const handleAlbumClick = (albumId: string) => {
    console.log(`Navigating to album with ID: ${albumId}`);
    navigate(`/single/album/${albumId}`);
  };

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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
              onClick={() => handleAlbumClick(album._id)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${album.album_cover})` }}
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
