import { FC } from 'react';
import Checkbox from '../../../../components/Checkbox';
import Datepicker from '../../../../components/Datepicker';
import Select from '../../../../components/Select';
import { INTERVAL_OPTIONS_SELECTOR } from '../../../../utils/constants';
import Button from '../../../../components/Button';

interface IInputGroup {
  actionError: boolean;
  endDate: string;
  endDateError: boolean;
  historical: boolean;
  interval: string;
  realTime: boolean;
  startDate: string;
  startDateError: boolean;
  onHandleQuery: () => void;
  onSetEndDate: (date: string) => void;
  onSetHistorical: () => void;
  onSetInterval: (interval: string) => void;
  onSetRealTime: () => void;
  onSetStartDate: (date: string) => void;
}

const InputGroup: FC<IInputGroup> = ({
  actionError,
  endDate,
  endDateError,
  historical,
  interval,
  realTime,
  startDate,
  startDateError,
  onHandleQuery,
  onSetEndDate,
  onSetHistorical,
  onSetInterval,
  onSetRealTime,
  onSetStartDate,
}) => {
  return (
    <div className="flex flex-col w-full mx-auto items-star text-slate-700 text-xl justify-center items-center mt-12">
      <div className="flex w-full px-8 mx-auto items-star text-slate-700 text-xl justify-center items-center">
        <div className="flex flex-row text-slate-700 text-xl items-center w-1/2  gap-10">
          <Checkbox isChecked={realTime} onChange={onSetRealTime} label="Tiempo Real" />
          <Select
            label="Intervalo:"
            options={INTERVAL_OPTIONS_SELECTOR}
            value={interval}
            onSelect={onSetInterval}
            disable={historical}
          />
        </div>

        <div className="flex flex-row text-slate-700 text-xl items-center w-1/2 justify-between">
          <Checkbox isChecked={historical} onChange={onSetHistorical} label="Historico" />

          <div className="flex flex-col">
            <Datepicker
              date={startDate}
              label="Desde:"
              onDateChange={onSetStartDate}
              disable={realTime}
            />
            {startDateError && (
              <p className="text-red-500 text-lg absolute bg-slate-50 p-3 rounded-md mt-12">
                La fecha ingresada debe ser igual o anterior a la fecha de hoy.
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <Datepicker
              date={endDate}
              label="Hasta:"
              onDateChange={onSetEndDate}
              disable={realTime}
            />
            {endDateError && (
              <p className="text-red-500 text-lg absolute bg-slate-50 p-3 rounded-md mt-12">
                La fecha ingresada no puede ser anterior a la fecha de inicio o posterior a la fecha
                actual.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row text-slate-700 text-xl mt-8">
        <Button onClick={() => onHandleQuery()}>Graficar</Button>
        {actionError && (
          <p className="text-red-500 text-lg absolute bg-slate-50 p-3 rounded-md mt-12">
            Debe seleccionar entre 'Tiempo Real' o 'Histórico' y elegir los datos para la consulta.
          </p>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
