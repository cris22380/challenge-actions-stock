import { useEffect, useState } from 'react';
import { fetchStocks } from '../../service/fetchStocks';
import { IErrorQuery, IStock } from '../../types';

export interface IUseHome {
  currentPage: number;
  error: IErrorQuery | null;
  isLoading: boolean;
  showDetail: boolean;
  stockDetail: IStock | undefined;
  stocks: IStock[] | undefined;
  stocksSearch: IStock[] | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setError: React.Dispatch<React.SetStateAction<IErrorQuery | null>>;
  setStockDetail: React.Dispatch<React.SetStateAction<IStock | undefined>>;
  setStocks: (value: React.SetStateAction<IStock[] | undefined>) => void;
  setStocksFiltered: React.Dispatch<React.SetStateAction<IStock[] | undefined>>;
  toogleShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  toogleIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useHome = (): IUseHome => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<IErrorQuery | null>(null);
  const [isLoading, toogleIsLoading] = useState<boolean>(false);
  const [showDetail, toogleShowDetail] = useState<boolean>(false);
  const [stocks, setStocks] = useState<IStock[] | undefined>(undefined);
  const [stocksSearch, setStocksFiltered] = useState<IStock[] | undefined>(undefined);
  const [stockDetail, setStockDetail] = useState<IStock | undefined>(undefined);

  useEffect(() => {
    if (!stocks) {
      toogleIsLoading(() => true);
      fetchStocks()
        .then((stocks) => {
          toogleIsLoading(false);
          setStocks(() => stocks);
        })
        .catch((error) => {
          toogleIsLoading(false);
          setError({ message: error.message, code: error.code});
        });
    }
  }, [stocks]);

  return {
    currentPage,
    error,
    isLoading,
    showDetail,
    stockDetail,
    stocks,
    stocksSearch,
    setCurrentPage,
    setError,
    setStockDetail,
    setStocks,
    setStocksFiltered,
    toogleIsLoading,
    toogleShowDetail,
  };
};
