export enum JustifyTextEnum {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface IStock {
  symbol: string;
  name: string;
  currency: string;
  type: string;
}

export enum FilterKeyEnum {
  NAME = 'name',
  SYMBOL = 'symbol',
}

export interface IStockResponseValues {
  close: string;
  datetime: string;
}

export interface IStockResponseMeta {
  currency: string;
  interval: string;
  symbol: string;
}

export interface IStockResponse {
  meta: IStockResponseMeta;
  values: IStockResponseValues[];
  status: string;
  message?: string;
  code?: string;
}

export interface IErrorQuery {
  code?: string;
  message?: string;
  status?: string;
}
