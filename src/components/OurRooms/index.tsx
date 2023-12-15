import { ArticleRoom } from "../ArticleRoom";

export const dataRooms = [{}, {}];

export const OurRooms = () => {
  return (
    <section>
      <header>
        <h2> Our Resorts</h2>
      </header>
      {dataRooms.map((item, index) => (
        <ArticleRoom isRow={index % 2 === 0} key={index}></ArticleRoom>
      ))}
    </section>
  );
};
