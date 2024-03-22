import { IGroupProps } from "types/group";
import * as S from "./GroupCard.styles";
import {
  GradeRounded as GradeRoundedIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IGroupCardProps {
  group: IGroupProps;
  handleRemove(): void;
}

const GroupCard = ({ group, handleRemove }: IGroupCardProps) => {
  const { id, name, tags } = group;

  return (
    <S.Wrapper>
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
        <Link to={`/group/${id}`}>
          <EditIcon color="info" />
        </Link>
        <Link to={`/group/${id}`}>
          <VisibilityIcon color="info" />
        </Link>
        <DeleteIcon color="error" onClick={handleRemove} />
      </S.Icons>
    </S.Wrapper>
  );
};

export default GroupCard;
