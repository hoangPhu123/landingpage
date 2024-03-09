import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import footer from "./../../../assets/img/footer.png";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ggPlay from "./../../../assets/img/ggplay.png";
import appStore from "./../../../assets/img/appstore.png";

const footerLinks = [
  {
    title: "About us",
    links: [
      {
        name: "Concept",
        link: "/",
      },
      {
        name: "Franchise",
        link: "/",
      },
      {
        name: "Business",
        link: "/",
      },
      {
        name: "Restaurant signup",
        link: "/",
      },
      {
        name: "For Investors",
        link: "/",
      },
    ],
  },
  {
    title: "Get help",
    links: [
      {
        name: "Read FAQs",
        link: "/",
      },
      {
        name: "Restaurants",
        link: "/",
      },
      {
        name: "Specialities",
        link: "/",
      },
      {
        name: "Sign up to deliver",
        link: "/",
      },
      {
        name: `English `,
        link: "/",
        icon: <FontAwesomeIcon icon={faChevronDown} />,
      },
    ],
  },
  {
    title: "Contact us",
    links: [
      {
        name: "Yellow kitchen Paris 11",
        link: "/",
      },
      {
        name: `69 avenue de la Republique 75011 Paris`,
        link: "/",
      },
      {
        name: "0800 111 126",
        link: "/",
      },
      {
        name: "contact@yellowkitchens.com",
        link: "/",
      },
    ],
  },
];

const socialMedia = [
  {
    id: "social-media-1",
    icon: <BsInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    icon: <AiOutlineTwitter />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-2",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
];

const rights = [
  {
    id: "rights1",
    name: "Privacy Policy",
  },
  {
    id: "rights2",
    name: "Terms",
  },
  {
    id: "rights3",
    name: "© 2020 Yellow kitchen",
  },
];

function Footer() {
  return (
    <section
      className={`footer flex justify-center items-center sm:py-11 md:py-7 py-4 flex-col `}
    >
      <div
        className={`footer-content flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start mr-10 mt-3">
          <div className="footer-title w-[236px] h-[70.14px] text-7xl md:w-[160px] md:mb-[-20px]">
            <img src={footer} alt="" />
          </div>

          <div className="footer-title1 w-2/3 md:w-4/5 md:mb-[-30px]">
            <hr />
          </div>
          <div className="footer-icon mt-14">
            <div className="footer-icon-left flex gap-3">
              <img src={appStore} alt="" />

              <img src={ggPlay} alt="" />
            </div>
            <div className="footer-icon-right"></div>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="footer-title-menu font-poppins font-medium text-[28px] md:text-[18px] leading-[18px] text-white pb-2">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`footer-title-link text-gray-300 font-poppins font-normal text-[17px] md:text-[13px] leading-[22px] md:leading-[14px] tracking-wider text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name} {link.icon}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6">
        <div>
          <ul className="list-none mt-4 flex">
            {socialMedia.map((social, index) => (
              <li
                key={social.id}
                className={`pr-5 text-gray-300 text-[22px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== social.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                {social.icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="copyrights md:pr-10">
          <ul className="list-none mt-4 flex">
            {rights.map((rights, index) => (
              <li
                key={rights.id}
                className={`footer-rights md:pl-10 md:text-[12px] pl-16 text-gray-300 text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== rights.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                {rights.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
