import { Typography } from "@mui/material";
import { Meeting } from "../../../shared/model/types";
import { DeleteMeeting } from "../../../features/delete-meeting";

export const MeetingItem = ({ meeting }: { meeting: Meeting }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography>meeting.start_time - meeting_end_time </Typography>
      <Typography>meeting.meeting_type</Typography>
      <Typography> meeting.meeting_status</Typography>
      <DeleteMeeting meeting_id={meeting.meeting_id} />
    </div>
  );
};
