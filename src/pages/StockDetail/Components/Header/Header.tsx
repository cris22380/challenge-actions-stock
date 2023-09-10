import { FC, ReactNode } from 'react';
import { IStock } from '../../../../types';

const Header: FC<{ stock: IStock }> = ({ stock }): ReactNode => {
  return (
    <div className="text-5xl text-slate-700 border-b mb-3 border-slate-700 p-2 mx-auto  w-full">
      <span>{stock.symbol} - </span>
      <span>{stock.name} - </span>
      <span>{stock.currency}</span>
    </div>
  );
};

export default Header;
