import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useCalendar } from "../lib/useCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export const BaseCalendar = () => {
  const style = {
    border: "1px solid darkblue",
    borderRadius: "10px",
  };

  const { setNewDate } = useCalendar();
  const [value, setValue] = useState<Dayjs>(dayjs(Date.now()));
  function setDate(newValue: Dayjs) {
    setValue(newValue);
    setNewDate(JSON.stringify(newValue));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={style}
        value={value}
        onChange={(newValue: Dayjs) => setDate(newValue)}
        views={["year", "month", "day"]}
      />
    </LocalizationProvider>
  );
};
