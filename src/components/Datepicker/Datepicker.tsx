import { FC, ReactNode } from 'react';

interface IDate {
  date: string;
  disable?: boolean;
  label: string;
  onDateChange: (date: string) => void;
}
const Datepicker: FC<IDate> = ({ date, disable, label, onDateChange }): ReactNode => {
  return (
    <div className="flex items-center my-2">
      <label className="ml-8">{label}</label>
      <input
        type="datetime-local"
        className="bg-slate-100 text-slate-700 rounded-md p-1 text-base ml-2"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        disabled={disable}
      />
    </div>
  );
};

export default Datepicker;
