import Modal from "components/Material/Modal";
import React, { useState } from "react";
import * as S from "./NewGroupModal.styles";
import {
  Autocomplete,
  Button,
  Divider,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { IGroupProps } from "types/group";
import { itemsMoked } from "services/items";
import { mockedTags, settingsOptions } from "utils/mocked";
import { useForm } from "react-hook-form";
import { IPayerProps } from "types/payer";
import groupService from "services/groups";

interface INewGroupModalProps {
  handleClose(): void;
  isOpen: boolean;
  selectedGroup: IGroupProps | null;
}

interface IFormValuesProps {
  name: string;
  tags: string[];
  settings: {};
  items: IPayerProps[];
}

const NewGroupModal = ({
  handleClose,
  isOpen,
  selectedGroup,
}: INewGroupModalProps) => {
  const [settings, setSettings] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const { register, handleSubmit, setValue, reset } = useForm<IFormValuesProps>(
    {
      defaultValues: {
        name: "",
        tags: [],
        items: [],
      },
    }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.checked,
    }));
  };

  const submitByAction = async (data: IFormValuesProps) => {
    const ownderId = 1; // pegando por parametro nas variaveis globais

    const formatedItems: { [key: string]: IPayerProps } = {};
    Object.values(data.items).forEach((key) => {
      const selectedItem = itemsMoked.find((item) => {
        return item.payer_id === key.payer_id;
      });
      if (selectedItem) formatedItems[key.payer_id] = selectedItem;
    });

    const formatedData = {
      ...data,
      items: formatedItems,
      settings: JSON.stringify(settings),
      owner: ownderId,
    };

    try {
      await groupService.create(formatedData);
    } catch (e) {
      console.log("error submitByAction", e);
    } finally {
      reset();
      handleClose();
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <S.Typography variant="h5">{`${
        selectedGroup?.id ? "Edição" : "Criação"
      } de grupo`}</S.Typography>

      <Divider />

      <S.Form onSubmit={handleSubmit(submitByAction)}>
        <S.FlexLine>
          <TextField label="Nome" fullWidth {...register("name")} />
          <Autocomplete
            {...register("items")}
            options={itemsMoked}
            fullWidth
            multiple
            onChange={(_, value) => setValue("items", value)}
            renderInput={(params) => <TextField label="items" {...params} />}
            getOptionLabel={(option) => option.payer_name}
          />
        </S.FlexLine>

        <Typography sx={{ paddingTop: 1 }}>Settings</Typography>

        <S.FormGroup>
          {settingsOptions.map((option) => {
            return (
              <FormControlLabel
                key={option.key}
                control={<Switch name={option.key} onChange={handleChange} />}
                label={option.label}
              />
            );
          })}
        </S.FormGroup>

        <Autocomplete
          {...register("tags")}
          options={mockedTags}
          multiple
          onChange={(_, value) => setValue("tags", value)}
          renderInput={(params) => <TextField label="Tags" {...params} />}
        />

        <S.FlexLine sx={{ paddingTop: 2 }}>
          <Button type="submit" fullWidth>
            Enviar
          </Button>
        </S.FlexLine>
      </S.Form>
    </Modal>
  );
};

export default NewGroupModal;
