import { FC, ReactNode } from 'react';
import { IStock } from '../../types';

const StocksTable: FC<{ list: IStock[]; onClick: (stockDetail: IStock) => void }> = ({
  list,
  onClick,
}): ReactNode => {
  return (
    <table className="table-fixed w-full text-slate-700">
      <thead>
        <tr className="bg-slate-400 text-slate-100 text-lg">
          <th className="p-3 text-left border-slate-500 w-1/6 border-r">Símbolo</th>
          <th className="p-3 text-left border-slate-500 border-r">Nombre</th>
          <th className="p-3 text-left border-slate-500 w-1/12 border-r">Moneda</th>
          <th className="p-3 text-left w-1/5">Tipo</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.map((stock, idx) => {
            return (
              <tr
                key={`stock-${stock.symbol}-${idx}`}
                className={`${idx % 2 ? 'bg-slate-200' : 'bg-slate-300'}`}
              >
                <td
                  className="p-3 text-left border-slate-500 border-r hover:bg-slate-400"
                  onClick={() => onClick(stock)}
                >
                  {stock.symbol}
                </td>
                <td className="p-3 text-left border-slate-500 border-r">{stock.name}</td>
                <td className="p-3 text-left border-slate-500 border-r">{stock.currency}</td>
                <td className="p-3 text-left">{stock.type}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default StocksTable;
