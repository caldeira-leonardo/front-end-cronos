import { IGroupProps } from "types/group";
import * as S from "./Card.styles";
import {
  GradeRounded as GradeRoundedIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

interface IGroupCardProps {
  group: IGroupProps;
  handleRemove(): void;
  handleEdiT(): void;
}

const GroupCard = (
  { group, handleRemove, handleEdiT }: IGroupCardProps,
  ref: any
) => {
  const { id, name, tags } = group;

  return (
    <S.Wrapper ref={ref}>
      <S.Content>
        <GradeRoundedIcon color="warning" fontSize="large" />
        <S.Texts>
          <Typography variant="overline" fontSize={16}>
            {name}
          </Typography>
          <S.Tags>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </S.Tags>
        </S.Texts>
      </S.Content>
      <S.Icons>
        <EditIcon color="info" onClick={handleEdiT} />
        <Link to={`/group/${id}`}>
          <VisibilityIcon color="info" />
        </Link>
        <DeleteIcon color="error" onClick={handleRemove} />
      </S.Icons>
    </S.Wrapper>
  );
};

export default forwardRef(GroupCard);
