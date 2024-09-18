"use client";

//* Imports
import { IBreweriesState } from "@/interfaces/breweries.interface";
import styles from "./Breweries.module.css";
import Carrousel from "@/components/ui/carrousel/Carrousel";
import { fetchBreweries } from "@/lib/features/Breweries/BreweriesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function Breweries() {
  const dispatch = useAppDispatch();
  const { breweries } = useAppSelector(
    (state: { breweries: IBreweriesState }) => state.breweries
  );

  useEffect(() => {
    if (breweries.length > 0) return;
    dispatch(fetchBreweries());
  }, [dispatch, breweries]);

  //TODO => Debería de agregar un estado de error. Si no hay datos, debería de mostrar un error y no los skelletons.
  return (
    <div className={styles.container}>
      <Carrousel data={breweries} />
    </div>
  );
}
