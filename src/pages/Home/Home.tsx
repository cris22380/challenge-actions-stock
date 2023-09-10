import StocksTable from '../../components/StocksTable';
import PaginationButtons from '../../components/PaginationButtons';
import Search from '../../components/Search';
import { HandleHome } from './HandleHome';
import StockDetail from '../StockDetail';
import ErrorModal from '../../components/ErrorModal';

function Home() {
  const {
    currentPage,
    error,
    isLoading,
    showDetail,
    stockDetail,
    stocks,
    stocksSearch,
    totalPages,
    totalFilteredPages,
    handlePagination,
    handleSearch,
    handleStockDetail,
    setCurrentPage,
    setError,
    toogleShowDetail,
  } = HandleHome();

  return (
    <div className="flex flex-col items-center bg-slate-300 min-h-screen">
      {stockDetail && showDetail ? (
        <StockDetail stockDetail={stockDetail} onShowDetail={toogleShowDetail} />
      ) : (
        <div className="p-10 flex flex-col items-center w-3/4">
          {isLoading ? (
            <p className="text-4xl text-slate-700">Loading...</p>
          ) : (
            !error && (
              <>
                <p className="text-4xl my-2 w-full text-slate-700">
                  Para ver los detalles, por favor haga clic en el símbolo de la acción.
                </p>

                <Search onSearch={handleSearch} />

                {stocks && (
                  <div className="w-full mx-auto flex justify-center border rounded-md p-1 bg-slate-400">
                    <StocksTable
                      list={handlePagination(stocksSearch ? stocksSearch : stocks)}
                      onClick={handleStockDetail}
                    />
                  </div>
                )}

                <PaginationButtons
                  onSetCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalPages={stocksSearch ? totalFilteredPages : totalPages}
                />
              </>
            )
          )}
        </div>
      )}
      {error && <ErrorModal error={error} onClick={() => setError(null)} />}
    </div>
  );
}

export default Home;
