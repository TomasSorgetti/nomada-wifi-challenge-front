"use client";

import { IBreweriesState } from "@/interfaces/breweries.interface";
import styles from "./Breweries.module.css";
import Carrousel from "@/components/ui/carrousel/Carrousel";
import {
  fetchBreweries,
  fetchCaliforniaBreweries,
} from "@/lib/features/Breweries/BreweriesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function Breweries() {
  const dispatch = useAppDispatch();
  const { breweries, californiaBreweries } = useAppSelector(
    (state: { breweries: IBreweriesState }) => state.breweries
  );

  useEffect(() => {
    if (breweries.length > 0 || californiaBreweries.length > 0) return;
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchBreweries()),
          dispatch(fetchCaliforniaBreweries()),
        ]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [dispatch, breweries, californiaBreweries]);

  return (
    <div className={styles.container}>
      <h1>Todas las opciones</h1>
      <Carrousel data={breweries} />
      <h2>Opciones en California</h2>
      <Carrousel data={californiaBreweries} />
    </div>
  );
}
