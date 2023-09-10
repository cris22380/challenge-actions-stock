import { FC } from 'react';

const Checkbox: FC<{
  isChecked: boolean;
  label: string;
  onChange: () => void;
}> = ({ isChecked, label, onChange }) => {
  return (
    <div className="flex flex-row text-slate-700 text-xl items-center my-2">
      <input
        type="checkbox"
        className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-slate-500 rounded-full bg-slate-100 mt-1 checked:bg-slate-700 checked:border-slate-100 mb-1"
        checked={isChecked}
        onChange={onChange}
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
