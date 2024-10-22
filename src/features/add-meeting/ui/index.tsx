import {
  Typography,
  FormControl,
  Button,
  MenuItem,
  Switch,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BaseModal } from "../../../shared/ui";
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
  const [slot, setSlot] = useState<TSlot>(slots[0]);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setTypeMeet(String(event.target.value));
  };
  const handleChangeSlot = (event: SelectChangeEvent) => {
    setSlot(event.target.value);
  };
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <BaseModal eventName="Создать заявку">
      <FormControl>
        <Typography>Дата 18.09.2024</Typography>
        <Typography>60 минут</Typography>
        <Select
          labelId="slot-select-label"
          id="slot-select"
          defaultValue={slot[0]}
          value={`${slot?.start_time} - ${slot?.end_time}`}
          label="Начало встречи"
          onChange={handleChangeSlot}
        >
          {slots.map((item) => (
            <MenuItem
              value={`${slot?.start_time} - ${slot?.end_time}`}
            >{`${slot?.start_time} - ${slot?.end_time}`}</MenuItem>
          ))}
        </Select>
        <Select
          labelId="meet-type-select-label"
          id="meet-type-select"
          defaultValue={meetingTypes[0]}
          value={typeMeet}
          label="Тип встречи"
          onChange={handleChange}
        >
          {meetingTypes.map((item: string) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        <div>{checked === true ? "offline" : "online"}</div>
        <Switch
          checked={checked}
          onChange={handleCheck}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Button>Сохранить</Button>
      </FormControl>
    </BaseModal>
  );
};
