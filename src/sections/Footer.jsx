import React from 'react';
import { socialImgs } from "../constants/index.js";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-5 py-5 px-5">

        {/* Terms & Conditions */}
        <div className="flex flex-col justify-center md:items-start items-center">
          <a
            href="https://codehush.com/termsofservice"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footer_terms")}
          </a>
        </div>

        {/* Social Icons */}
        <div className="socials flex gap-4">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              href={img.url}
              key={img.url}
            >
              <img src={img.imgPath} alt={img.name} className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &#169; {new Date().getFullYear()} Omar |{" "}
            <a
              href="https://codehush.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              CodeHush
            </a>. {t("footer_text")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
