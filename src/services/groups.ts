import baseURL from "common/baseURL";
import { IPayerProps } from "types/payer";

const headers = { headers: { Authorization: `Bearer {token}` } };

interface ICreateGroupProps {
  items: {
    [key: string]: IPayerProps;
  };
  settings: string;
  owner: number;
  name: string;
  tags: string[];
}

const groupService = {
  create: async (data: ICreateGroupProps) => {
    const url = `/`;
    await baseURL.post(url, data, headers);
  },
  search: async (groupId: number) => {
    const url = `/${groupId}`;
    await baseURL.get(url, headers);
  },
  searchByOwner: async (ownerId: number) => {
    const url = `/list/${ownerId}`;
    await baseURL.get(url, headers);
  },
  remove: async (groupId?: number) => {
    const url = `/${groupId}`;
    await baseURL.delete(url, headers);
  },
};

export default groupService;
