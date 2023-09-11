import { useEffect, useState } from 'react';
import * as Highcharts from 'highcharts';
import { IErrorQuery, IStock } from '../../types';
import { fetchStocksByInterval } from '../../service/fetchStockByInterval';
import { getChartOptions, parseInterval } from '../../utils';
export interface IUseStockDetail {
  actionError: boolean;
  chartOptions: Highcharts.Options | null;
  endDate: string;
  endDateError: boolean;
  historical: boolean;
  interval: string;
  queryError: IErrorQuery | undefined;
  realTime: boolean;
  startDate: string;
  startDateError: boolean;
  setChartOptions: React.Dispatch<React.SetStateAction<Highcharts.Options | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setHistorical: React.Dispatch<React.SetStateAction<boolean>>;
  setIntervalValue: React.Dispatch<React.SetStateAction<string>>;
  setQueryError: React.Dispatch<React.SetStateAction<IErrorQuery | undefined>>;
  setRealTime: React.Dispatch<React.SetStateAction<boolean>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  toogleAccionError: React.Dispatch<React.SetStateAction<boolean>>;
  toogleEndDateError: React.Dispatch<React.SetStateAction<boolean>>;
  toogleStartDateError: React.Dispatch<React.SetStateAction<boolean>>;
  setInitIntervaQuery: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useStockDetail = (stockDetail: IStock) => {
  const [actionError, toogleAccionError] = useState<boolean>(false);
  const [chartOptions, setChartOptions] = useState<Highcharts.Options | null>(null);
  const [endDate, setEndDate] = useState<string>('');
  const [endDateError, toogleEndDateError] = useState<boolean>(false);
  const [historical, setHistorical] = useState<boolean>(false);
  const [interval, setIntervalValue] = useState<string>('');
  const [queryError, setQueryError] = useState<IErrorQuery | undefined>(undefined);
  const [realTime, setRealTime] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>('');
  const [startDateError, toogleStartDateError] = useState<boolean>(false);
  const [initIntervalQuery, setInitIntervaQuery] = useState<boolean>(false);

  useEffect(() => {
    const intervalValue = parseInterval(interval);
    const intervalId = setInterval(() => {
      if (initIntervalQuery && stockDetail && realTime && interval) {
        fetchStocksByInterval(stockDetail.symbol, interval).then((data) => {
          data.status === 'error'
            ? setQueryError({ message: data.message, code: data.code })
            : setChartOptions(getChartOptions(data));
        });
      }
    }, intervalValue);

    return () => {
      clearInterval(intervalId);
    };
  }, [initIntervalQuery, stockDetail, realTime, interval]);
  return {
    actionError,
    chartOptions,
    endDate,
    endDateError,
    historical,
    interval,
    queryError,
    realTime,
    startDate,
    startDateError,
    setChartOptions,
    setEndDate,
    setHistorical,
    setInitIntervaQuery,
    setIntervalValue,
    setQueryError,
    setRealTime,
    setStartDate,
    toogleAccionError,
    toogleEndDateError,
    toogleStartDateError,
  };
};
