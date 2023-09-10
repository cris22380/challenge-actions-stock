import { FilterKeyEnum, IStock, IStockResponse } from '../types';
import { ITEMS_PAGE_QUANTITY } from './constants';

export const filterStockList = (
  list: IStock[],
  value: string,
  key: FilterKeyEnum
): IStock[] | undefined => {
  const val = new RegExp(value);
  return list.filter((stock) => val.test(stock[key].toLowerCase()));
};

export const calculateTotalPages = (list?: IStock[]): number =>
  list ? Math.ceil(list.length / ITEMS_PAGE_QUANTITY) : 0;

export const getMilisiseconds = (date: string): number => {
  return new Date(date).getTime();
};

export const getChartOptions = (data: IStockResponse): Highcharts.Options => {
  return {
    title: {
      text: data.meta.symbol,
    },
    series: [
      {
        name: 'Intervalo-Cotizacion',
        type: 'line',
        data: data.values.map((value) => parseFloat(value.close)),
      },
    ],
    yAxis: {
      title: {
        text: 'Cotizacion',
      },
    },
    xAxis: {
      categories: data.values.map((value) => `${value.datetime} hs`).reverse(),
    },
  };
};

export const formatDate = (date: string): string => {
    return `${date.replace('T', '%20')}:00`;
  };
