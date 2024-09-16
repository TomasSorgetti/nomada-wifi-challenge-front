import { IBrewery } from "@/interfaces/breweries.interface";
import styles from "./Carrousel.module.css";
import CarrouselCard from "./carrouselCard/CarrouselCard";
import BrewerySkelletonCard from "../skelletons/breweries/BrewerySkelletonCard";

interface CarrouselProps {
  data: IBrewery[];
}
export default function Carrousel({ data }: CarrouselProps) {
  return (
    <div className={styles.carrousel}>
      {data.length > 0 ? (
        data?.map((brewery) => (
          <CarrouselCard key={brewery.id} brewery={brewery} />
        ))
      ) : (
        <>
          <BrewerySkelletonCard />
          <BrewerySkelletonCard />
          <BrewerySkelletonCard />
          <BrewerySkelletonCard />
        </>
      )}
    </div>
  );
}
