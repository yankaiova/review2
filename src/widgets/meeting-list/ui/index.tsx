import { Meeting } from "../../../shared/model/types";
import { Dayjs } from "dayjs";

type PropsMeetingList = {
  date: Dayjs;
};
const meetings: Meeting[] = [];
export const MeetingList = ({ date }: PropsMeetingList) => {
  if (meetings.length === 0) {
    return <div>Нет слотов текущую дату</div>;
  }
  return (
    <div>
      {meetings.map((item: Meeting) => (
        <MeetingItem key={item.meeting_id} meeting={item} />
      ))}
    </div>
  );
};
