import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import { BaseTypography } from "../../shared/ui";
import iconUser from "../../assets/User.png";
interface Expert {
  id_expert: number;
  expert_name: string;
  role: string;
  competetion: string;
  mark: number;
}
type PropsCardExpert = { expert: Expert };
export const CardExpert = ({ expert }: PropsCardExpert) => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {expert.expert_name}
        </Typography>
        <CardMedia src={iconUser} />
        <Box sx={style}>
          <BaseTypography>Роль</BaseTypography>
          <BaseTypography>{expert.role}</BaseTypography>
        </Box>

        <Box sx={style}>
          <BaseTypography>Уровень компетенции</BaseTypography>
          <BaseTypography>{expert.competetion}</BaseTypography>
        </Box>
        <Box sx={style}>
          <BaseTypography>Оценка</BaseTypography>
          <Rating name="read-only" value={expert.mark} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};
