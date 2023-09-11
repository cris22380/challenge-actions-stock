import { FilterKeyEnum, IStock } from '../../types';
import { calculateTotalPages, filterStockList } from '../../utils';
import { ITEMS_PAGE_QUANTITY } from '../../utils/constants';
import { IUseHome, useHome } from './useHome';

interface IHandlerHome extends IUseHome {
  totalPages: number;
  totalFilteredPages: number;
  handlePagination: (stockList: IStock[]) => IStock[];
  handleSearch: (value: string, key: FilterKeyEnum) => void;
  handleStockDetail: (stock: IStock) => void;
  handleCloseDetail: () => void;
}

export const HandleHome = (): IHandlerHome => {
  const {
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
  } = useHome();

  const handleSearch = (value: string, key: FilterKeyEnum) => {
    stocks && setStocksFiltered(() => stocks && filterStockList(stocks, value, key));
    setCurrentPage(() => 1);
  };

  const handlePagination = (stockList: IStock[]): IStock[] => {
    return stockList.slice(
      currentPage * ITEMS_PAGE_QUANTITY - ITEMS_PAGE_QUANTITY,
      currentPage * ITEMS_PAGE_QUANTITY
    );
  };

  const handleStockDetail = (stock: IStock): void => {
    setStockDetail(stock);
    toogleShowDetail(true);
  };

  const handleCloseDetail = () => {
    toogleShowDetail(false);
    setStocksFiltered(undefined)
  }

  const totalPages = calculateTotalPages(stocks);
  const totalFilteredPages = calculateTotalPages(stocksSearch);

  return {
    currentPage,
    error,
    isLoading,
    showDetail,
    stockDetail,
    stocks,
    stocksSearch,
    totalPages,
    totalFilteredPages,
    handleCloseDetail,
    handlePagination,
    handleSearch,
    handleStockDetail,
    setCurrentPage,
    setError,
    setStockDetail,
    setStocks,
    setStocksFiltered,
    toogleIsLoading,
    toogleShowDetail,
  };
};
