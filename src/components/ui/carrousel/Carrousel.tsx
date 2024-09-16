import { IBrewery } from "@/lib/features/Breweries/BreweriesSlice";
import styles from "./Carrousel.module.css";
import CarrouselCard from "./carrouselCard/CarrouselCard";

interface CarrouselProps {
  data: IBrewery[];
}
export default function Carrousel({ data }: CarrouselProps) {

  return (
    <div className={styles.carrousel}>
      {data?.map((brewery) => (
        <CarrouselCard key={brewery.id} brewery={brewery} />
      ))}
    </div>
  );
}
