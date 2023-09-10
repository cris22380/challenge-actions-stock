import { FC, ReactNode } from 'react';

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  disable?: boolean;
  label: string;
  options: IOption[];
  value: string;
  onSelect: (value: string) => void;
}

const Select: FC<ISelect> = ({ disable, label, options, value, onSelect }): ReactNode => {
  return (
    <div className="flex items-center my-2">
      <label className="">{label}</label>
      <select
        className="bg-slate-100 text-slate-700 rounded-md p-2 text-base ml-2"
        value={value}
        onChange={(e) => onSelect(e.target.value)}
        disabled={disable}
      >
        {options?.map((option, idx) => (
          <option value={option.value} key={`option-${option.value}-${idx}`}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
