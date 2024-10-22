import { Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Meeting } from "../../../shared/model/types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const MeetingItem = ({ meeting }: { meeting: Meeting }) => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate(`/meeting/${meeting.meeting_id}/edit`);
  };
  const handleClickDetail = () => {
    navigate(`/meeting/${meeting.meeting_id}`);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">
        {String(meeting.start_time).slice(-5)} -{" "}
        {String(meeting.end_time).slice(-5)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {meeting.meeting_status}
      </Typography>
      <Button onClick={handleClickDetail}>Подробнее</Button>
      <Button onClick={handleClickEdit}>
        <EditOutlinedIcon />
      </Button>
    </Stack>
  );
};
