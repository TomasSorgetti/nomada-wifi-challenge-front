const BASE_URL = "https://api.openbrewerydb.org/v1";

export const getAllBreweries = async () => {
  const response = await fetch(`${BASE_URL}/breweries`);

  return await response.json();
};

export const getBreweriesByCountry = async (country: string) => {
  const response = await fetch(`${BASE_URL}/breweries?by_state=${country}`);

  return await response.json();
};

export const getBreweryById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/breweries/${id}`);

  return await response.json();
};
