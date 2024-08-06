import axios from 'axios';
import { CountriesWithCapitals, Puzzle } from '../interfaces/interfaces';
import { getRandomPuzzles } from './utils';
import { MAX_NUMBER_OF_ITEMS } from '../components/Game/constants';
import { useQuery } from 'react-query';

const API_URL = `https://restcountries.com/v3.1/all?fields=name,capital`;
// CACHE_TIME - 24h
const CACHE_TIME = 24 * 60 * 60 * 1000;

const fetchData = async (): Promise<Puzzle[] | null> => {
  const response = await axios.get(API_URL);
  if (response?.data) {
    const data = response?.data as CountriesWithCapitals[];
    const countriesWithCapitals = data.filter(
      ({ capital }) => !!capital.length
    );
    return getRandomPuzzles(countriesWithCapitals, MAX_NUMBER_OF_ITEMS);
  }
  return null;
};

export const useFetchData = () => {
  const result = useQuery('countriesWithCapitals', () => fetchData(), {
    cacheTime: CACHE_TIME,
    refetchOnWindowFocus: false
  });
  return result;
};
