import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";

export const ArticleServicesRoom = ({
  srcImage,
  title,
}: {
  srcImage: StaticImageData | string;
  title: string;
}) => {
  return (
    <article className={style.article}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          alt={"Icon of " + title}
          src={srcImage}
        ></Image>
      </picture>
      <h4 className={style.title}>{title}</h4>
    </article>
  );
};
