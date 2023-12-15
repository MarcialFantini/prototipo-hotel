import { ArticleRoom } from "../ArticleRoom";
import style from "./style.module.css";

export const dataRooms = [{}, {}];

export const OurRooms = () => {
  return (
    <section className={style.section}>
      <header className={style.header}>
        <h2 className={style.title}> Our Resorts</h2>
      </header>
      <div className={style.containerRooms}>
        {dataRooms.map((item, index) => (
          <ArticleRoom isRow={index % 2 === 0} key={index}></ArticleRoom>
        ))}
      </div>
    </section>
  );
};
