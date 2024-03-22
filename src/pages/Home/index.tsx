import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Home.styles";
import { Button, Typography } from "@mui/material";
import groupService from "services/groups";
import { useDispatch, useSelector } from "react-redux";
import { IStoreProps } from "store";
import { removeGroup, updateGroup } from "store/reducers/groups";
import ConfirmationModal from "components/Material/ConfirmationModal";
import { IGroupProps } from "types/group";
import GroupCard from "components/Group/Card";
import NewGroupModal from "components/Group/NewGroupModal";
import { groupReturn } from "utils/mocked";

const Home = () => {
  const groups = useSelector((state: IStoreProps) => state.groups);
  const dispatch = useDispatch();

  const [selectedGroup, setSelectedGroup] = useState<IGroupProps | null>(null);
  const [isOpen, setIsOpen] = useState("");

  const getGroups = useCallback(async () => {
    try {
      const ownerId = 1;
      await groupService.search(ownerId.toString());
    } catch (e) {
      console.log("getGroups", e);
    } finally {
      dispatch(updateGroup(groupReturn));
    }
  }, [dispatch]);

  const handleRemoveGroup = async () => {
    try {
      await groupService.remove(selectedGroup?.id);
    } catch (e) {
      console.log("handleRemoveGroup", e);
    } finally {
      if (selectedGroup?.id) dispatch(removeGroup(selectedGroup?.id));

      handleResetSelection();
    }
  };

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  const handleResetSelection = () => {
    setSelectedGroup(null);
    setIsOpen("");
  };

  useEffect(() => {
    console.log('["remove"].includes(isOpen)', ["remove"].includes(isOpen)); // remove logs
    console.log("isOpen", isOpen); //TODO remove log
  }, [isOpen]);

  return (
    <S.Wrapper>
      <S.TextContent>
        <Typography variant="h5">Grupos:</Typography>
        <Button onClick={() => setIsOpen("create")}>Novo Grupo</Button>
      </S.TextContent>
      <S.Cards>
        {groups?.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            handleRemove={() => {
              setSelectedGroup(group);
              setIsOpen("remove");
            }}
            handleEdiT={() => {
              setSelectedGroup(group);
              setIsOpen("edit");
            }}
          />
        ))}
      </S.Cards>
      <ConfirmationModal
        isOpen={["remove"].includes(isOpen)}
        headerText="Exclusão de grupo"
        confirmationText={`Você irá excluir o grupo "${selectedGroup?.name}"`}
        handleClose={handleResetSelection}
        handleConfirm={handleRemoveGroup}
      />
      <NewGroupModal
        isOpen={["create", "edit"].includes(isOpen)}
        handleClose={handleResetSelection}
        selectedGroup={selectedGroup}
      />
    </S.Wrapper>
  );
};

export default Home;
