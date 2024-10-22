import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { Dayjs } from "dayjs";
type PropsAddSlot = {
  date: Dayjs;
};
export const AddSlot = ({ date }: PropsAddSlot) => {
  const handleClickToAdd = () => {};
  return (
    <Button onClick={handleClickToAdd}>
      <AddCircleOutlineIcon />
      добавить слот
    </Button>
  );
};
