import { useState } from 'react';

export interface IUsePaginationButton {
  actualPage: string | number;
  error: boolean;
  setActualPage: React.Dispatch<React.SetStateAction<string | number>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePaginationsButtons = (): IUsePaginationButton => {
  const [actualPage, setActualPage] = useState<string | number>('');
  const [error, setError] = useState<boolean>(false);
  return {
    actualPage,
    error,
    setActualPage,
    setError,
  };
};
