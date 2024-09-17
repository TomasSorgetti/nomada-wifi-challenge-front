import { IBrewery } from "@/interfaces/breweries.interface";
import styles from "./Carrousel.module.css";
import CarrouselCard from "./carrouselCard/CarrouselCard";
import BrewerySkelletonCard from "../skelletons/breweries/BrewerySkelletonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface CarrouselProps {
  data: IBrewery[];
}
export default function Carrousel({ data }: CarrouselProps) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      autoplay={false}
      style={{ width: "100%", height: "191px" }}
      loop={false}
      className={styles.container}
    >
      {data.length > 0 ? (
        data?.map((brewery) => (
          <SwiperSlide key={brewery.id} style={{ width: "328px" }}>
            <CarrouselCard brewery={brewery} />
          </SwiperSlide>
        ))
      ) : (
        <>
          <BrewerySkelletonCard />
          <BrewerySkelletonCard />
          <BrewerySkelletonCard />
          <BrewerySkelletonCard />
        </>
      )}
    </Swiper>
  );
}
