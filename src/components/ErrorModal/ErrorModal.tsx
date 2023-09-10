import { FC, ReactNode } from 'react';
import SmallButton from '../SmallButton';
import { IErrorQuery } from '../../types';

const ErrorModal: FC<{ error: IErrorQuery; onClick: () => void }> = ({
  error,
  onClick,
}): ReactNode => {
  return (
    <div className="absolute h-full w-full [background:rgba(0,0,0,0.6)] z-10 t-10 flex">
      <div className="w-3/4 h-3/4 z-20 p-16 bg-slate-100 rounded-md flex flex-col opacity-100 top-24 mx-auto my-auto">
        <SmallButton onClick={onClick}>X</SmallButton>
        <p className="text-7xl text-red-500 mb-20">Error {error.code}</p>
        <p className="text-4xl text-red-500">{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
