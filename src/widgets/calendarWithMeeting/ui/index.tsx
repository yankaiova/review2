import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState, useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { Typography } from "@mui/material";
import { MeetingList } from "../../meeting-list/ui";
import { SlotList } from "../../slot-list/ui";
import { AddSlot } from "../../../features/add-slot/ui";
import dayjs, { Dayjs } from "dayjs";

export const BaseCalendar = () => {
  const { role } = useContext(AuthContext);
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <div>
      <DateCalendar
        value={value}
        onChange={(newValue: Dayjs) => setValue(newValue)}
        views={["year", "month", "day"]}
      />
      {role === "expert" && (
        <div>
          <Typography>Мои слоты</Typography>
          <SlotList date={value} />
          <AddSlot date={value} />
        </div>
      )}
      <Typography>Мои слоты</Typography>
      <MeetingList date={value} />
    </div>
  );
};
