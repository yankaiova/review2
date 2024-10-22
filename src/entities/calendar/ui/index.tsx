import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useCalendar } from "../lib/useCalendar";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export const BaseCalendar = () => {
  const { setNewDate } = useCalendar();
  const [value, setValue] = useState<Dayjs>(dayjs("2022-04-17"));
  function setDate(newValue: Dayjs) {
    setValue(newValue);
    setNewDate(newValue);
  }

  return (
    <DateCalendar
      value={value}
      onChange={(newValue: Dayjs) => setDate(newValue)}
      views={["year", "month", "day"]}
    />
  );
};
