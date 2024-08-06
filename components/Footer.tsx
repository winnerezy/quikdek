import { BiLogoTiktok } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 bg-transparent w-full">
      <nav className="text-[--purple]">
        <h6 className="footer-title]">Services</h6>
        <a className="link link-hover ">Branding</a>
        <a className="link link-hover">Marketing</a>
        <p className="link link-hover">&copy; Quick Deck 2024</p>
      </nav>
      <nav className="text-[--purple]">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover" href="https://paypal.me/darksxint">Supppoer Us</a>
        <h6 className="footer-title">
          <div className="flex gap-2 text-xl">
            <a href="https://x.com/winnerezy"><FaXTwitter/></a>
            <a href="https://www.tiktok.com/@winnerezy"><BiLogoTiktok/></a>
            <a href="https://github.com/winnerezy"><FaGithub/></a>
          </div>
        </h6>
      </nav>
    </footer>
  );
};
