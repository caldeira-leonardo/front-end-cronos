import { IPayerProps } from "./payer";

export interface IGroupProps {
  id: number;
  name: string;
  tags: string[];
  items: {
    [key: string]: IPayerProps;
  };
  settings: IGroupSettingsProps;
  owner: string;
}

export interface IGroupSettingsProps {
  showMode?: boolean;
  defaultMessage?: string;
}
