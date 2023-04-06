import React, { Component, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    GB: "+51",
    FR: "+80",
    IT: "+21",
    TR: "+90",
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider className="h-full hidden sm:block" {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            data-testid="main-image"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            data-testid="main-image"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
          />
        </div>
      </Slider>
      <div className="container absolute top-0 left-1/2 -translate-x-1/2 h-full z-10 flex items-center justify-between">
        <div className="">
          <img
            height={180}
            width={180}
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br></br> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş Yap veya Kayıt Ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2 ">
              <ReactFlagsSelect
                className="flag-select"
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
              <label className="flex-1 relative block">
                <input
                  required
                  type="text"
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full hover:border-primary-brand-color transition-all outline-none focus:border-primary-brand-color text-sm peer pt-2"
                />
                <span className="absolute top-0 left-0 px-4 h-full flex items-center text-gray-400 text-sm peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow  text-primary-brand-color  transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm border font-semibold">
              Telefon numarası ile devam et
            </button>
            <hr className="h-1px" />
            <button className="bg-facebook-blue bg-opacity-50 text-white  transition-colors hover:bg-white hover:text-facebook-blue h-12 flex items-center justify-center rounded-md w-full text-sm border font-semibold">
              <BsFacebook size={24} className="ml-2" />
              <span className="mx-auto ">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
