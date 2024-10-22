import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Typography } from "@mui/material";
import { useCalendar } from "../../../entities/calendar";
import { BaseModal } from "../../../shared/ui";
import { Select, InputLabel, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { calculateEndTime } from "../../../shared/lib/calculateEndTime";
import { dateView } from "../../../shared/lib/dateView";
export const AddSlot = () => {
  const startSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
  ];
  const timer: number[] = [30, 60];
  const { date } = useCalendar();
  const dateV = dateView(date);
  const [startTime, setStartTime] = useState<string>(startSlots[0]);
  const handleChangeStart = (event: any) => {
    setStartTime(event.target.value);
  };

  const [time, setTime] = useState<number>(timer[0]);
  const handleChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  const [endTime, setEndTime] = useState<string>(startTime);

  useEffect(() => {
    const t = calculateEndTime(JSON.parse(date), startTime, time);
    setEndTime(t);
  }, [time, startTime]);

  const handleClickToAdd = () => {};
  return (
    <div>
      <AddCircleOutlineIcon />
      <BaseModal eventName="добавить">
        <Typography>
          {dateV} {startTime} - {endTime}. Слот на {time} м.
        </Typography>
        <InputLabel id="slot-add-select-label">Начало в</InputLabel>
        <Select
          id="slot-add-select"
          value={startTime}
          label="Начало в"
          onChange={handleChangeStart}
        >
          {startSlots.map((item: string) => (
            <MenuItem key={"slot" + item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <InputLabel id="slot-t-select-label">Тайминг</InputLabel>
        <Select
          id="slot-t-select"
          value={time}
          label="Тайминг"
          onChange={handleChangeTime}
        >
          {timer.map((item: number) => (
            <MenuItem key={"slot" + item} value={item}>
              {item + "м"}
            </MenuItem>
          ))}
        </Select>
      </BaseModal>
    </div>
  );
};
