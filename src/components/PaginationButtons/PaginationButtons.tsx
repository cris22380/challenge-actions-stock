import { FC, ReactNode } from 'react';
import { HandlePaginationButtons } from './HandlePaginationButtons';
import Input from '../Input';
import { JustifyTextEnum } from '../../types';
import Button from '../Button';

interface IPaginationButtons {
  currentPage: number;
  totalPages: number;
  onSetCurrentPage: (page: number) => void;
}
const PaginationButtons: FC<IPaginationButtons> = ({
  currentPage,
  totalPages,
  onSetCurrentPage,
}): ReactNode => {
  const { actualPage, error, handleNextPage, handlePrevPage, handleSetPage } =
    HandlePaginationButtons(totalPages, onSetCurrentPage);

  return (
    <>
      <div className="w-3/4 flex mx-auto justify-center text-slate-100 gap-1 mt-3">
        {totalPages > 1 && currentPage > 1 && (
          <Button onClick={() => handlePrevPage(currentPage)}>Previa</Button>
        )}

        <span className="border p-3 rounded-md bg-slate-400 w-[20%] text-center ">
          {`Pag: ${currentPage} de ${totalPages}`}
        </span>

        {totalPages > 1 && (
          <div className="rounded-md w-[15%]">
            <Input
              onChange={handleSetPage}
              placeHolder="Ir a pagina..."
              justifyText={JustifyTextEnum.CENTER}
              value={actualPage}
            />
          </div>
        )}
        {totalPages > 1 && currentPage < totalPages && (
          <Button onClick={() => handleNextPage(currentPage)}>Siguiente</Button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-lg">El número de página debe ser menor que {totalPages}</p>
      )}
    </>
  );
};
export default PaginationButtons;
