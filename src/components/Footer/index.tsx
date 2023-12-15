import style from "./style.module.css";
import Image from "next/image";
import social1 from "../../../public/assets/images/icons/Facebook/Social icon.png";
import social2 from "../../../public/assets/images/icons/Instagram/Social icon.png";
import social3 from "../../../public/assets/images/icons/linkedin/Social icon.png";
import social4 from "../../../public/assets/images/icons/Twitter/Social icon.png";
import social5 from "../../../public/assets/images/icons/Youtube/Social icon.png";

export const Footer = () => {
  return (
    <>
      <footer className={style.footerContainer}>
        <div className={style.column}>
          <h2 className={style.title}>Nombre Hotel</h2>
          <p className={style.text}>We catalyze your luxurious vacation</p>
        </div>
        <div className={style.column}>
          <h4 className={style.title}>Address</h4>
          <p className={style.text}>
            Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
            60011.
          </p>
          <p className={style.text}>
            support@hygeinfotech.com Mon - Friday, 8am : 5pm
          </p>
        </div>
        <div className={style.column}>
          <h4 className={style.title}>Follow Us</h4>

          <ul className={style.list}>
            <li>
              <Image src={social1} alt="social media"></Image>
            </li>
            <li>
              <Image src={social2} alt="social media"></Image>
            </li>
            <li>
              <Image src={social3} alt="social media"></Image>
            </li>
            <li>
              <Image src={social4} alt="social media"></Image>
            </li>
            <li>
              <Image src={social5} alt="social media"></Image>
            </li>
          </ul>
        </div>
      </footer>
      <div className={style.containerFinal}>
        <p>© 2023 Hyge Royal. All Rights Reserved.</p>
      </div>
    </>
  );
};
