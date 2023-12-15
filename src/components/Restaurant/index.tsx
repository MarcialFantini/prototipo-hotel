import Image from "next/image";
import srcDefault from "../../../public/assets/images/header.jpeg";

import style from "./styled.module.css";

export const Restaurant = () => {
  return (
    <section className={style.containerSection}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          src={srcDefault}
          alt="Restaurant hotel"
        ></Image>
      </picture>
      <article className={style.article}>
        <h2 className={style.title}>Discover our History</h2>
        <p style={{ marginBottom: "40px" }} className={style.text}>
          At Hyge Royal, our story unfolds with a dedication to hospitality,
          delivering extraordinary experiences.
        </p>
        <p className={style.text}>
          Our vision is a haven of elegance where guests immerse in comfort.
          Meticulously crafted details, warm staff, and sustainable practices
          define our commitment.
        </p>
        <button className={style.btn}>Know More</button>
      </article>
    </section>
  );
};
