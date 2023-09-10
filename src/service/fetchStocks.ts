import { IStock } from '../types';

const url = import.meta.env.VITE_BASE_URL;

export const fetchStocks = async (): Promise<IStock[]> => {
  const stocks = await fetch(`${url}/stocks`);
  const { data } = await stocks.json();
  return data;
};
