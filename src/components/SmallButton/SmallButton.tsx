import { FC, ReactNode } from 'react';

const SmallButton: FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}): ReactNode => {
  return (
    <button
      className="ml-auto w-fit bg-slate-400 py-1 px-3 hover:bg-slate-200 hover:text-slate-700 rounded-md text-slate-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default SmallButton;
