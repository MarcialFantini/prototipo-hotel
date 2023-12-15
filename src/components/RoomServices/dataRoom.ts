import living1 from "../../../public/assets/images/icons/Living Rooms.svg";
import living2 from "../../../public/assets/images/icons/Luxury Bedrooms.svg";
import living3 from "../../../public/assets/images/icons/Modular Kitchen.svg";
import living4 from "../../../public/assets/images/icons/Fine Furnishing.svg";
import living5 from "../../../public/assets/images/icons/Free Wifi.svg";
import living6 from "../../../public/assets/images/icons/Sit-Out Area.svg";
import living7 from "../../../public/assets/images/icons/Private Parking.svg";
import living8 from "../../../public/assets/images/icons/Air Conditioning.svg";
import { StaticImageData } from "next/image";

interface DataIcon {
  srcImage: StaticImageData | string;
  title: string;
}

export const dataIcons: DataIcon[] = [
  {
    title: "Living Rooms",
    srcImage: living1,
  },
  {
    title: "Luxury Bedrooms",
    srcImage: living2,
  },
  {
    title: "Modular Kitchen",
    srcImage: living3,
  },
  {
    title: "Fine Furnishing",
    srcImage: living4,
  },
  {
    title: "Free Wifi",
    srcImage: living5,
  },
  {
    title: "Sit-Out Area",
    srcImage: living6,
  },
  {
    title: "Private Parking",
    srcImage: living7,
  },
  {
    title: "Air Conditioning",
    srcImage: living8,
  },
];
