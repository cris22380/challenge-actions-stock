import { fetchStocksByInterval } from '../../service/fetchStockByInterval';
import { fetchStocksByDate } from '../../service/fetchStocksByDate';
import { IStock } from '../../types';
import { getChartOptions, getMilisiseconds } from '../../utils';
import { IUseStockDetail, useStockDetail } from './useStockDetail';

export interface IHandleStockDetail extends IUseStockDetail {
  handleSetEndDate: (date: string) => void;
  handleSetHistorical: () => void;
  handleSetInterval: (interval: string) => void;
  handleSetRealTime: () => void;
  handleSetStartDate: (date: string) => void;
  handleQuery: () => void;
}

export const HandleStockDetail = (stockDetail: IStock): IHandleStockDetail => {
  const {
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
  } = useStockDetail(stockDetail);

  const handleSetEndDate = (date: string) => {
    setEndDate(() => date);
    getMilisiseconds(startDate) > getMilisiseconds(date) ||
    getMilisiseconds(date) > new Date().getTime()
      ? toogleEndDateError(true)
      : toogleEndDateError(false);
    toogleAccionError(false);
  };

  const handleSetHistorical = () => {
    setHistorical(true);
    setRealTime(false);
    setIntervalValue('');
    setInitIntervaQuery(false);
    toogleAccionError(false);
  };

  const handleSetInterval = (interval: string) => {
    setIntervalValue(interval);
    setInitIntervaQuery(false);
    toogleAccionError(false);
  };

  const handleSetRealTime = () => {
    setRealTime(true);
    setHistorical(false);
    setStartDate('');
    setEndDate('');
    toogleAccionError(false);
  };

  const handleSetStartDate = (date: string) => {
    setStartDate(() => date);
    getMilisiseconds(date) > new Date().getTime()
      ? toogleStartDateError(true)
      : toogleStartDateError(false);
    toogleAccionError(false);
  };

  const handleQuery = () => {
    if (
      (!historical && !realTime) ||
      (realTime && !interval) ||
      (historical && (!startDate || !endDate))
    ) {
      toogleAccionError(true);
    }
    if (stockDetail && historical && startDate && endDate && !startDateError && !endDateError) {
      fetchStocksByDate(stockDetail.symbol, startDate, endDate).then((data) => {
        data.status === 'error'
          ? setQueryError({ message: data.message, code: data.code })
          : setChartOptions(getChartOptions(data));
      });
    }
    if (stockDetail && realTime && interval) {
      setInitIntervaQuery(true);
      fetchStocksByInterval(stockDetail.symbol, interval).then((data) => {
        data.status === 'error'
          ? setQueryError({ message: data.message, code: data.code })
          : setChartOptions(getChartOptions(data));
      });
    }
  };

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
    handleQuery,
    handleSetEndDate,
    handleSetHistorical,
    handleSetInterval,
    handleSetRealTime,
    handleSetStartDate,
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
