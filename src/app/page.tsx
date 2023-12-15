import { Hero } from "@/components/Hero";
import styles from "./page.module.css";
import { OurRooms } from "@/components/OurRooms";
import { RoomServices } from "@/components/RoomServices";
import { Restaurant } from "@/components/Restaurant";
import { MapGoogle } from "@/components/MapGoogle";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <OurRooms></OurRooms>
      <RoomServices></RoomServices>
      <Restaurant></Restaurant>
      <MapGoogle></MapGoogle>
      <Footer></Footer>
    </main>
  );
}
