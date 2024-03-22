import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IGroupProps } from "types/group";
import { groupReturn, itemsMoked } from "utils/mocked";
import * as S from "./Group.styles";
import { Chip, TextField, Typography } from "@mui/material";
import groupService from "services/groups";
import ItemsCard from "components/ItemsCard";

const Group = () => {
  const [group, setGroup] = useState<IGroupProps>({
    id: -1,
    items: {
      "": itemsMoked[0],
    },
    name: "",
    owner: "",
    settings: {
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    },
    tags: [],
  });
  const { groupId } = useParams();
  const getUGroup = useCallback(async () => {
    try {
      if (groupId) await groupService.search(groupId);
    } catch (e) {
      console.log("error updating", e);
    }
  }, [groupId]);

  useEffect(() => {
    getUGroup();
    setGroup(groupReturn[Number(groupId) - 1]);
  }, [getUGroup, groupId]);

  return (
    <S.Wrapper>
      <Typography textAlign="center" variant="h3" p={2}>
        {group?.name}
      </Typography>

      <TextField
        disabled
        defaultValue={group?.owner}
        value={group?.owner}
        label="proprietario"
      />

      <S.ChipsWrapper>
        <Typography>Tags</Typography>
        <S.Chips>
          {group?.tags.map((tag) => (
            <Chip label={tag} color="primary" />
          ))}
        </S.Chips>

        <Typography ml={5}>Configurações</Typography>
        <S.Chips>
          {group?.tags.map((tag) => (
            <Chip label={tag} color="secondary" />
          ))}
        </S.Chips>
      </S.ChipsWrapper>

      <S.ChipsWrapper>
        {Object.values(group?.items).map((item) => (
          <ItemsCard {...item}>{item.payer_name}</ItemsCard>
        ))}
      </S.ChipsWrapper>
    </S.Wrapper>
  );
};

export default Group;
