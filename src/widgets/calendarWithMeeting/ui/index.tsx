import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { Meeting } from "../../../shared/model/types";
import { meetings } from "../../../pages/my-meeting/ui";
const meetingsByDay = (meetings: Meeting[], day: Dayjs) => {
  return meetings.filter((item) => item.start_time.getDate() === day);
};

export const BaseCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <div>
      <DateCalendar
        value={value}
        onChange={(newValue: Dayjs) => setValue(newValue)}
        views={["year", "month", "day"]}
      />
      {meetingsByDay(meetings, value).map((item: Meeting) => (
        <MeetingItem key={item.meeting_id} meeting={item} />
      ))}
    </div>
  );
};
