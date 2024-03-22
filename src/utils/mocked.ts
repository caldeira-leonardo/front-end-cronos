import { IGroupProps } from "types/group";

export const headerOptions = [
  {
    key: 1,
    label: "Grupos",
  },
  {
    key: 2,
    label: "Itens",
  },
];

export const settingsOptions = [
  {
    label: "Opção 1",
    key: "option1",
  },
  {
    label: "Opção 2",
    key: "option2",
  },
  {
    label: "Opção 3",
    key: "option3",
  },
  {
    label: "Opção 4",
    key: "option4",
  },
];

export const groupReturn: IGroupProps[] = [
  {
    id: 1,
    name: "Motociclistas",
    tags: ["primeira", "segunda"],
    owner: "Leonardo",
    items: {
      "100": {
        payer_id: "100",
        payer_name: "tales",
        payer_address: "prudente",
        payer_address_state: "sp",
        payer_address_zipcode: "19000-000",
        payer_address_neighbordhood: "centro",
        payer_address_addressName: "rua miquelina",
        payer_address_number: "01",
      },
      "200": {
        payer_id: "200",
        payer_name: "josé",
        payer_address: "presidente",
        payer_address_state: "rj",
        payer_address_zipcode: "20000-000",
        payer_address_neighbordhood: "zona sul",
        payer_address_addressName: "rua balneário",
        payer_address_number: "02",
      },
    },
    settings: {
      showMode: true,
      defaultMessage: "Seja bem vindo",
    },
  },
  {
    id: 2,
    name: "Pilotos",
    tags: ["terceira", "quarta"],
    owner: "Leonardo",
    items: {
      "300": {
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
      "400": {
        payer_id: "400",
        payer_name: "josé",
        payer_address: "presidente",
        payer_address_state: "rj",
        payer_address_zipcode: "20000-000",
        payer_address_neighbordhood: "zona sul",
        payer_address_addressName: "rua paixão",
        payer_address_number: "02",
        payer_address_complement: "",
      },
    },
    settings: {
      showMode: true,
      defaultMessage: "Seja bem vindo",
    },
  },
];

export const mockedTags = ["primeira", "segunda", "terceira", "quarta"];
