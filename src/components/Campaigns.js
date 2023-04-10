import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextButton({ onClick, className }) {
  return (
    <button
      className={` text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevButton({ onClick, className }) {
  return (
    <button
      className={` text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  return (
    <div className="container mx-auto py-8">
      <h3 className="font-semibold text-gray-800 mb-2">Kampanyalar</h3>
      <Slider className="-mx-2 relative" {...settings}>
        {banners &&
          banners.map((banner) => (
            <div key={banner.id} className="px-2">
              <img src={banner.image} className="w-full sm:rounded-lg" />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
