import {
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Switch,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BaseModal from "../../../shared/ui/BaseBox";
import { Slot } from "../../../shared/model/types";
import { useState } from "react";
import { meetingTypes } from "../../../mocks";

type PropsAddMeeting = {
  slotm: Slot;
};
type TSlot = { start_time: string; end_time: string };

export const slots: TSlot[] = [
  { start_time: "12:30", end_time: "13:00" },
  { start_time: "14:00", end_time: "14:30" },
];
export const AddMeeting = ({ slotm }: PropsAddMeeting) => {
  const [typeMeet, setTypeMeet] = useState<string>("");
  const [slot, setSlot] = useState<Slot>();
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setTypeMeet(String(event.target.value));
  };
  const handleChangeSlot = (event: SelectChangeEvent) => {
    setSlot({ start_time: event.target.value, end_time: "14:00" });
  };
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <BaseModal eventName="Создать заявку">
      <FormControl fullWidth>
        <Typography>Дата 18.09.2024</Typography>
        <Typography>30 минут</Typography>
        <InputLabel id="slot-select-label">Начало встречи</InputLabel>
        <Select
          labelId="slot-select-label"
          id="slot-select"
          defaultValue={String(slotm.start_time.getDate())}
          value={slot.start_time}
          label="Начало встречи"
          onChange={handleChangeSlot}
        >
          {slots.map((item) => (
            <MenuItem value={item.start_time}>{item.start_time}</MenuItem>
          ))}
        </Select>
        <InputLabel id="meet-type-select-label">Тип встречи</InputLabel>
        <Select
          labelId="meet-type-select-label"
          id="meet-type-select"
          value={typeMeet}
          label="Тип встречи"
          onChange={handleChange}
        >
          {meetingTypes.map((item: string) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        <Switch
          checked={checked}
          onChange={handleCheck}
          inputProps={{ "aria-label": "controlled" }}
        />
      </FormControl>
    </BaseModal>
  );
};
