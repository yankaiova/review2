import { Card, CardContent, Typography, Box, CardActions } from "@mui/material";
import { BaseButton, BaseTypography } from "../../../shared/ui";
interface Slot {
  id_slot: number;
  date: string;
  start_time: string;
  end_time: string;
}
type PropsCardSlot = { slot: Slot };
export const SlotCard = ({ slot }: PropsCardSlot) => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <Card sx={{ maxWidth: 400 }} key={slot.id_slot}>
      <CardContent>
        <Typography variant="h5" component="div">
          {slot.date}
        </Typography>
        <Box sx={style}>
          <BaseTypography>Начало</BaseTypography>
          <BaseTypography>{slot.start_time}</BaseTypography>
        </Box>

        <Box sx={style}>
          <BaseTypography>Конец</BaseTypography>
          <BaseTypography>{slot.end_time}</BaseTypography>
        </Box>
      </CardContent>
      <CardActions>
        <BaseButton text="Записаться" />
      </CardActions>
    </Card>
  );
};
