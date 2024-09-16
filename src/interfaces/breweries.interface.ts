export interface IBrewery {
  id: string;
  name: string;
  address_1: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  website_url: string;
  longitude: string;
  latitude: string;
  street: string;
}
export interface IBreweriesState {
  breweries: IBrewery[];
  californiaBreweries: IBrewery[];
  brewery: IBrewery;
  isLoading: boolean;
}
