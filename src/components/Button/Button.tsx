import { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode; onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button
      className="p-2 border bg-slate-400 rounded-md w-32 text-slate-100 hover:bg-slate-200 hover:text-slate-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
