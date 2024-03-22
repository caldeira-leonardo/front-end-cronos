import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Home.styles";
import { Button, Typography } from "@mui/material";
import groupService from "services/groups";
import { useDispatch, useSelector } from "react-redux";
import { IStoreProps } from "store";
import { removeGroup, updateGroup } from "store/reducers/groups";
import GroupCard from "components/GroupCard";
import ConfirmationModal from "components/Material/ConfirmationModal";
import { IGroupProps } from "types/group";

interface IHomeProps {
  children?: React.ReactNode;
}

const Home = ({ children }: IHomeProps) => {
  const groups = useSelector((state: IStoreProps) => state.groups);
  const dispatch = useDispatch();

  const [selectedGroup, setSelectedGroup] = useState<IGroupProps | null>(null);

  const getGroups = useCallback(async () => {
    //read-me com motivo de não ter try/catch
    const resp = await groupService.search(1);

    dispatch(updateGroup(resp));
  }, [dispatch]);

  const handleRemoveGroup = async () => {
    await groupService.remove(selectedGroup?.id);

    if (selectedGroup?.id) dispatch(removeGroup(selectedGroup?.id));

    setSelectedGroup(null);
  };

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  return (
    <S.Wrapper>
      <S.TextContent>
        <Typography variant="h5">Grupos:</Typography>
        <Button>Novo Grupo</Button>
      </S.TextContent>
      <S.Cards>
        {groups?.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            handleRemove={() => setSelectedGroup(group)}
          />
        ))}
      </S.Cards>
      <ConfirmationModal
        isOpen={!!selectedGroup?.id}
        headerText="Exclusão de grupo"
        confirmationText={`Você irá excluir o grupo "${selectedGroup?.name}"`}
        handleClose={() => setSelectedGroup(null)}
        handleConfirm={handleRemoveGroup}
      />
    </S.Wrapper>
  );
};

export default Home;
