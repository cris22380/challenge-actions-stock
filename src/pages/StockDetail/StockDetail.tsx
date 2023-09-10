import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FC } from 'react';
import Header from './Components/Header';
import InputGroup from './Components/InputGroup';
import { HandleStockDetail } from './HandleStockDetail';
import { IStock } from '../../types';
import SmallButton from '../../components/SmallButton';
import ErrorModal from '../../components/ErrorModal';

const StockDetail: FC<{
  stockDetail: IStock;
  onShowDetail: (isShow: boolean) => void;
}> = ({ stockDetail, onShowDetail }) => {
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
    handleQuery,
    handleSetEndDate,
    handleSetHistorical,
    handleSetInterval,
    handleSetRealTime,
    handleSetStartDate,
    setQueryError,
  } = HandleStockDetail(stockDetail);

  return (
    <>
      {queryError && <ErrorModal onClick={() => setQueryError(undefined)} error={queryError} />}
      <div className="p-8 min-h-screen w-full 2xl:w-3/4 flex flex-col z-0">
        <SmallButton onClick={() => onShowDetail(false)}>X</SmallButton>
        {stockDetail && <Header stock={stockDetail} />}
        <InputGroup
          actionError={actionError}
          endDate={endDate}
          endDateError={endDateError}
          historical={historical}
          interval={interval}
          realTime={realTime}
          startDate={startDate}
          startDateError={startDateError}
          onSetEndDate={handleSetEndDate}
          onHandleQuery={handleQuery}
          onSetHistorical={handleSetHistorical}
          onSetInterval={handleSetInterval}
          onSetRealTime={handleSetRealTime}
          onSetStartDate={handleSetStartDate}
        />
        {chartOptions && (
          <div className="mt-14 w-full mx-auto">
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              containerProps={{ style: { height: '50rem' } }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default StockDetail;
