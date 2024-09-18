"use client";
import styles from "./BreweriesFiltered.module.css";
import { IBreweriesState } from "@/interfaces/breweries.interface";
import Carrousel from "@/components/ui/carrousel/Carrousel";
import { useAppSelector } from "@/lib/hooks";
import BreweriesFilter from "@/components/forms/breweries/BreweriesFilter";

export default function BreweriesFiltered() {
  const { filteredBreweries, isLoading } = useAppSelector(
    (state: { breweries: IBreweriesState }) => state.breweries
  );

  // useEffect(() => {
  //   dispatch(fetchCaliforniaBreweries());
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      <BreweriesFilter />
      {!isLoading && filteredBreweries.length === 0 ? (
        <div>No se encontraron resultados</div>
      ) : (
        <Carrousel data={filteredBreweries} />
      )}
    </div>
  );
}
