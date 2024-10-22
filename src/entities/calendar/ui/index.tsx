import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useCalendar } from "../lib/useCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export const BaseCalendar = () => {
  const { setNewDate } = useCalendar();
  const [value, setValue] = useState<Dayjs>(dayjs(Date.now()));
  function setDate(newValue: Dayjs) {
    setValue(newValue);
    setNewDate(JSON.stringify(newValue));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        onChange={(newValue: Dayjs) => setDate(newValue)}
        views={["year", "month", "day"]}
      />
    </LocalizationProvider>
  );
};
