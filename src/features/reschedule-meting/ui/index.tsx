import { Box, Typography } from "@mui/material";
import BaseModal from "../../../shared/ui/BaseBox";

export const RescheduleMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const rescheduleMeeting = () => {};

  return (
    <BaseModal eventName="Выберите время для переноса">
      <Typography>Выберите время для переноса</Typography>
    </BaseModal>
  );
};
