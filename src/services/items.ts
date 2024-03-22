import baseURL from "common/baseURL";
import { itemsMoked } from "utils/mocked";

const itemService = {
  search: async () => {
    // await baseURL.get("/items");

    return itemsMoked;
  },
  delete: async (itemId: string) => {
    await baseURL.delete(`/items/${itemId}`);
  },
};

export default itemService;
