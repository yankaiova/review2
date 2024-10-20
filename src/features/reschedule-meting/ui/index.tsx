import { Box, Typography } from "@mui/material";
import BaseModal from "../../../shared/ui/BaseModal";

export const RescheduleMeeting = ({ meeting_id }: { meeting_id: number }) => {
  const rescheduleMeeting = () => {};

  return (
    <BaseModal eventName="Выберите время для переноса">
      <Typography>Выберите время для переноса</Typography>
    </BaseModal>
  );
};
