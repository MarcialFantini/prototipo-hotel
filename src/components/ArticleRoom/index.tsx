import Image from "next/image";
import srcImage from "../../../public/assets/images/header.jpeg";
import styled from "./styled.module.css";
interface props {
  isRow: boolean;
}

export const ArticleRoom = ({ isRow }: props) => {
  return (
    <article
      style={{ flexDirection: !isRow ? "row-reverse" : "row" }}
      className={styled.article}
    >
      <picture className={styled.picture}>
        <Image className={styled.img} src={srcImage} alt="Room"></Image>
      </picture>
      <div className={styled.textContainer}>
        <h4 className={styled.title}>Zen Villa</h4>
        <p className={styled.text}>
          Zenvilla is designed to meet the requirements of modern day travelers.
          We understand each trip is different and have thoughtfully balanced
          the scapes of a peaceful home and a luxury hotel.{" "}
        </p>
        <button className={styled.btn}>View Product</button>
      </div>
    </article>
  );
};
