import { FC } from 'react';
import Input from '../Input';
import { FilterKeyEnum } from '../../types';

const Search: FC<{ onSearch: (value: string, key: FilterKeyEnum) => void }> = ({ onSearch }) => {
  const handleSearchBySymbol = (value: string) => {
    onSearch(value.toString(), FilterKeyEnum.SYMBOL);
  };
  const handleSearchByName = (value: string) => {
    onSearch(value.toString(), FilterKeyEnum.NAME);
  };
  return (
    <div className="w-full flex justify-between gap-3 mb-3 ">
      <Input onChange={handleSearchBySymbol} placeHolder="Buscar por Sïmbolo..." />
      <Input onChange={handleSearchByName} placeHolder="Buscar por Nombre..." />
    </div>
  );
};

export default Search;
