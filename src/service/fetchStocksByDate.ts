import { IStockResponse } from '../types';
import { formatDate } from '../utils';

const URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchStocksByDate = async (
  symbol: string,
  startDate: string,
  endDate: string
): Promise<IStockResponse> => {
  const response = await fetch(
    `${URL}/time_series?symbol=${symbol}&interval=15min&start_date=${formatDate(
      startDate
    )}&end_date=${formatDate(endDate)}&apikey=${API_KEY}`
  );
  return await response.json();
};
