import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { useCalendar } from "../../../entities/calendar";

export const AddSlot = () => {
  const { date } = useCalendar();
  const handleClickToAdd = () => {};
  return (
    <Button onClick={handleClickToAdd}>
      <AddCircleOutlineIcon />
      добавить слот
    </Button>
  );
};
