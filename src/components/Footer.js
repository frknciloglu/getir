import React from "react";
import Menu from "./ui/Menu";
import { GoPrimitiveDot } from "react-icons/go";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        { title: "Hakkımızda" },
        { title: "Kariyer" },
        { title: "Teknoloji Kariyerleri" },
        { title: "İletişim" },
        { title: "Sosyal Sorumluluk Projeleri" },
      ],
    },

    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        { title: "Sıkça Sorulan Sorular" },
        { title: "Kişisel Verilerin Korunması" },
        { title: "Gizlilik Politikası" },
        { title: "Kullanım Koşulları" },
        { title: "Çerez Politikası" },
      ],
    },

    {
      title: "İş Ortağımız Olun",
      items: [
        { title: "Bayimiz Olun" },
        { title: "Deponuzu Kiralayın" },
        { title: "GetirYemek Restoranı Olun" },
        { title: "GetirÇarşı İşletmesi Olun" },
        { title: "Zincir Restoranlar" },
      ],
    },
  ];
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <h6 className="text-lg text-primary-brand-color">
              Getir'i indirin!!
            </h6>
            <nav className="flex flex-col justify-center items-start gap-y-4">
              <a href="#" className="transition-all transform hover:scale-105 ">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-sm text-gray-700 flex gap-x-8">
            &copy; 2021 Getir
            <a href="#" className="text-primary-brand-color flex items-center ">
              <GoPrimitiveDot />
              Bilgi toplumu hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700 "
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700 "
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700 "
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="#"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
