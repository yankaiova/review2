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
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="10px"
    >
      <Typography variant="body1" color="secondary.main">
        {String(meeting.start_time).slice(-5)} -
        {String(meeting.end_time).slice(-5)}
      </Typography>
      <Typography variant="body1" color="text.primary" margin={"0 20px"}>
        {meeting.meeting_status}
      </Typography>
      <Button size="small" onClick={handleClickDetail}>
        Подробнее
      </Button>
      <Button onClick={handleClickEdit}>
        <EditOutlinedIcon />
      </Button>
    </Stack>
  );
};
