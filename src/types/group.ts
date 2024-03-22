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
  option1?: boolean;
  option2?: boolean;
  option3?: boolean;
  option4?: boolean;
}
