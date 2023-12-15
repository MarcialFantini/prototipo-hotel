import Image from "next/image";
import social1 from "../../../public/assets/images/icons/Facebook/Social icon.png";
import social2 from "../../../public/assets/images/icons/Instagram/Social icon.png";
import social3 from "../../../public/assets/images/icons/linkedin/Social icon.png";
import social4 from "../../../public/assets/images/icons/Twitter/Social icon.png";
import social5 from "../../../public/assets/images/icons/Youtube/Social icon.png";

export const Footer = () => {
  return (
    <footer>
      <h2>Nombre Hotel</h2>
      <p>We catalyze your luxurious vacation</p>

      <div>
        <h4>Address</h4>
        <p>
          Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
          60011.
        </p>
        <p>support@hygeinfotech.com Mon - Friday, 8am : 5pm</p>
      </div>
      <h4>Follow Us</h4>

      <ul>
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
    </footer>
  );
};
