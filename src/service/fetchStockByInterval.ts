import { IStockResponse } from '../types';

const URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchStocksByInterval = async (
  symbol: string,
  interval: string
): Promise<IStockResponse> => {
  const response = await fetch(
    `${URL}/time_series?symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`
  );
  return await response.json();
};
