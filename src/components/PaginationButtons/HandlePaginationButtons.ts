import { IUsePaginationButton, usePaginationsButtons } from './usePagination';

export interface IHandlerPaginationButtons extends IUsePaginationButton {
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
  handleSetPage: (inputValue: string) => void;
}

export const HandlePaginationButtons = (
  totalPages: number,
  onSetCurrentPage: (page: number) => void
): IHandlerPaginationButtons => {
  const { actualPage, error, setActualPage, setError } = usePaginationsButtons();

  const handleNextPage = (page: number): void => {
    onSetCurrentPage(page < totalPages ? page + 1 : totalPages);
    setActualPage('');
  };

  const handlePrevPage = (page: number): void => {
    onSetCurrentPage(page > 1 ? page - 1 : 1);
    setActualPage('');
    setError(false);
  };

  const handleSetPage = (inputValue: string): void => {
    const value = parseInt(inputValue);
    onSetCurrentPage(value <= totalPages ? value : totalPages);
    if (!value) {
      onSetCurrentPage(1);
    }
    setActualPage(value || '');
    setError(false);
    value > totalPages && setError(true);
  };

  return {
    actualPage,
    error,
    handleNextPage,
    handlePrevPage,
    handleSetPage,
    setActualPage,
    setError,
  };
};
