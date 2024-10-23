import { Button } from "@mui/material";

export const DeleteMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const deleteMeeting = () => {};

  return <Button onClick={deleteMeeting}>Удалить встречу</Button>;
};
