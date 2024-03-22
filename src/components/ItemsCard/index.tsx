import React from "react";
import * as S from "./ItemsCard.styles";
import { forwardRef } from "react";
import { IPayerProps } from "types/payer";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import itemService from "services/items";

interface IItemsCardProps extends IPayerProps {}

const ItemsCard = (
  {
    payer_name,
    payer_address,
    payer_address_addressName,
    payer_address_state,
    payer_id,
  }: IItemsCardProps,
  ref: any
) => {
  const handledeleteItem = async () => {
    try {
      await itemService.delete(payer_id);
    } catch (e) {
      console.log("error updating", e);
    } finally {
    }
  };

  return (
    <S.Wrapper ref={ref}>
      <S.IconWrapper>
        <TurnedInIcon color="success" />
      </S.IconWrapper>
      <Typography>
        Nome: <strong>{payer_name}</strong>
      </Typography>
      <Typography>
        Cidade: <strong>{payer_address}</strong>
      </Typography>
      <Typography>
        Estado: <strong>{payer_address_state}</strong>
      </Typography>
      <Typography>
        Rua: <strong>{payer_address_addressName}</strong>
      </Typography>
      <S.DeleteIconWrapper>
        <DeleteIcon color="error" onClick={handledeleteItem} />
      </S.DeleteIconWrapper>
    </S.Wrapper>
  );
};

export default forwardRef(ItemsCard);
