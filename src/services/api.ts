import { IComment } from "@/interfaces/comments.interface";
import { commentsMock } from "./comments.mock";

const BASE_URL = process.env.NEXT_PUBLIC_BREWERIES_API_URL;

export const getAllBreweries = async () => {
  const response = await fetch(`${BASE_URL}`);

  return await response.json();
};

export const getBreweriesByCountry = async (country: string) => {
  const response = await fetch(`${BASE_URL}?by_state=${country}`);

  return await response.json();
};

export const getBreweryById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);

  return await response.json();
};

export const getCommentsByBreweryId = async (): Promise<IComment[]> => {
  const response = new Promise<IComment[]>((resolve, reject) => {
    setTimeout(() => {
      if (false) reject("error");
      resolve(commentsMock);
    }, 200);
  });

  return response;
};
