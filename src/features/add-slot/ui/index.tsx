import { Typography } from "@mui/material";
import { useCalendar } from "../../../entities/calendar";
import { BaseButton, BaseModal, BaseTypography } from "../../../shared/ui";
import { Select, Stack, MenuItem, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { calculateEndTime } from "../../../shared/lib/calculateEndTime";
import { dateView } from "../../../shared/lib/dateView";
export const AddSlot = () => {
  const style = {
    maxWidth: "250px",
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  };
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

  return (
    <BaseModal eventName="добавить слот">
      <Stack
        direction="column"
        gap="10px"
        alignItems="start"
        marginLeft="50px"
        sx={{ width: "300px" }}
      >
        <Typography variant="h6" component="div" color="text.main">
          {dateV} {startTime} - {endTime}
        </Typography>
        <Typography color="#2FB3FF">Слот на {time} минут</Typography>
        <Box sx={style}>
          <BaseTypography>Начало</BaseTypography>
          <Select
            id="slot-add-select"
            value={startTime}
            onChange={handleChangeStart}
          >
            {startSlots.map((item: string) => (
              <MenuItem key={"slot" + item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={style}>
          <BaseTypography>Рассчитать на</BaseTypography>
          <Select id="slot-t-select" value={time} onChange={handleChangeTime}>
            {timer.map((item: number) => (
              <MenuItem key={"slot" + item} value={item}>
                {item + "м"}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <BaseButton text="Сохранить" />
      </Stack>
    </BaseModal>
  );
};
