import { Meeting } from "../../../shared/model/types";

//import { MeetingRoomSharp } from "@mui/icons-material"
export const meetings: Meeting[] = [];
export const MeetingList = ({ user_id }) => {
  return (
    <div>
      {meetings.map((item: Meeting) => (
        <MeetingItem />
      ))}
    </div>
  );
};
