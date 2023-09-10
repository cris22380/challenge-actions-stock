import { FC, ReactNode } from 'react';
import { JustifyTextEnum } from '../../types';

const Input: FC<{
  placeHolder: string;
  justifyText?: JustifyTextEnum;
  value?: string | number;
  onChange: (value: string) => void;
}> = ({ onChange, placeHolder, justifyText, value }): ReactNode => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      className={`border-slate-500 w-full p-3 leading-2 bg-slate-500 text-slate-100 placeholder:text-slate-100 rounded-md text-${justifyText}`}
      placeholder={placeHolder}
      value={value}
    />
  );
};

export default Input;
