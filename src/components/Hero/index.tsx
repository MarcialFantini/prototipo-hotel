import Image from "next/image";
import srcHeader from "../../../public/assets/images/header.jpeg";

import style from "./styled.module.css";
import { CheckResort } from "../CheckResort";

export const Hero = () => {
  return (
    <header className={style.containerHeader}>
      <picture className={style.picture}>
        <Image className={style.img} src={srcHeader} alt="imagen hotel"></Image>
      </picture>
      <div className={style.filter}></div>
      <div className={style.text}>
        <h2>Your Home Away From Home</h2>
        <p>
          Zen Villas offers a warm and inviting retreat, providing the perfect
          blend of comfort and hospitality for a memorable stay.
        </p>
        <CheckResort></CheckResort>
      </div>
    </header>
  );
};
