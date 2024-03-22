import { IPayerProps } from "types/payer";

const itemService = {
  search: async () => {
    // await baseURL.get("/items");

    return itemsMoked;
  },
};

export default itemService;

export const itemsMoked: IPayerProps[] = [
  {
    payer_id: "100",
    payer_name: "tales",
    payer_address: "prudente",
    payer_address_state: "sp",
    payer_address_zipcode: "19000-000",
    payer_address_neighbordhood: "centro",
    payer_address_addressName: "miquelina",
    payer_address_number: "01",
    payer_address_complement: "",
  },
  {
    payer_id: "200",
    payer_name: "josé",
    payer_address: "presidente",
    payer_address_state: "rj",
    payer_address_zipcode: "20000-000",
    payer_address_neighbordhood: "zona sul",
    payer_address_addressName: "balneário",
    payer_address_number: "02",
    payer_address_complement: "",
  },
  {
    payer_id: "300",
    payer_name: "Maria",
    payer_address: "Machado",
    payer_address_state: "mg",
    payer_address_zipcode: "29000-000",
    payer_address_neighbordhood: "centro",
    payer_address_addressName: "av. brasil",
    payer_address_number: "01",
    payer_address_complement: "",
  },
  {
    payer_id: "400",
    payer_name: "joséh",
    payer_address: "presidente",
    payer_address_state: "rj",
    payer_address_zipcode: "40000-000",
    payer_address_neighbordhood: "zona sul",
    payer_address_addressName: "rua paixão",
    payer_address_number: "02",
    payer_address_complement: "",
  },
  {
    payer_id: "500",
    payer_name: "Eduardo",
    payer_address: "qualquer",
    payer_address_state: "es",
    payer_address_zipcode: "50000-000",
    payer_address_neighbordhood: "zona leste",
    payer_address_addressName: "rua do crépe",
    payer_address_number: "02",
    payer_address_complement: "",
  },
  {
    payer_id: "600",
    payer_name: "Joaquina",
    payer_address: "Bahia",
    payer_address_state: "sa",
    payer_address_zipcode: "60000-000",
    payer_address_neighbordhood: "zona oeste",
    payer_address_addressName: "rua da pelota",
    payer_address_number: "02",
    payer_address_complement: "",
  },
];
