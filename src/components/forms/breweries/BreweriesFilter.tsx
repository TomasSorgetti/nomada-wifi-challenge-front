"use client";

import Ratio from "@/components/ui/ratio/Ratio";
import styles from "./BreweriesFilter.module.css";
import { useState } from "react";
import { getSecondValue } from "@/utils/getSecondValue";
import SearchBar from "@/components/ui/searchBar/SearchBar";
import { useAppDispatch } from "@/lib/hooks";
import { filterBreweries } from "@/lib/features/Breweries/BreweriesSlice";

export default function BreweriesFilter() {
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState("by_name");
  const [search, setSearch] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setFilter(name);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterBreweries({ filter, search }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Filtrar por: {getSecondValue(filter)}</p>
      <div className={styles.ratioContainer}>
        <Ratio name="by_name" value={filter} handleChange={handleFilterChange}>
          Name
        </Ratio>
        <Ratio name="by_city" value={filter} handleChange={handleFilterChange}>
          City
        </Ratio>
        <Ratio name="by_state" value={filter} handleChange={handleFilterChange}>
          State
        </Ratio>
        <Ratio
          name="by_country"
          value={filter}
          handleChange={handleFilterChange}
        >
          Country
        </Ratio>
      </div>

      <SearchBar
        name="search"
        value={search}
        handleSearchChange={handleSearchChange}
      />
    </form>
  );
}
