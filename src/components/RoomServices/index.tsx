import { ArticleServicesRoom } from "../ArticleServicesRoom";
import { dataIcons } from "./dataRoom";
import styled from "./styled.module.css";

export const RoomServices = () => {
  return (
    <section className={styled.containerSection}>
      <header className={styled.header}>
        <h2 className={styled.title}>
          Elevate Your Stay with Our Premium Amenities
        </h2>
        <p className={styled.text}>
          Indulge in a world of luxury and comfort with our exclusive resort
          amenities, designed to create unforgettable experiences for you.
        </p>
        <button className={styled.btn}>Contact Us</button>
      </header>
      <main className={styled.mainGrid}>
        {dataIcons.map((item) => (
          <ArticleServicesRoom
            key={item.title}
            srcImage={item.srcImage}
            title={item.title}
          ></ArticleServicesRoom>
        ))}
      </main>
    </section>
  );
};
