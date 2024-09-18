"use client";
import styles from "./BreweriesFiltered.module.css";
import { IBreweriesState } from "@/interfaces/breweries.interface";
import Carrousel from "@/components/ui/carrousel/Carrousel";
import { useAppSelector } from "@/lib/hooks";
import BreweriesFilter from "@/components/forms/breweries/BreweriesFilter";

export default function BreweriesFiltered() {
  const { filteredBreweries } = useAppSelector(
    (state: { breweries: IBreweriesState }) => state.breweries
  );

  return (
    <div className={styles.container}>
      <BreweriesFilter />
      <Carrousel data={filteredBreweries} />
    </div>
  );
}
