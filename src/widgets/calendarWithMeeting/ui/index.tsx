import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../../../shared/context";
import { MeetingList } from "../../meeting-list";
import { SlotList } from "../../slot-list";
import { AddSlot } from "../../../features/add-slot";
import { BaseCalendar } from "../../../entities/calendar";
import { AddMeeting } from "../../../features/add-meeting";
const slot = {
  slot_id: 5,
  user_id: 9,
  start_time: "12:30",
  end_time: "14:30",
  description: "какие то описание",
  type_slot: "g",
  is_availible: true,
};
export const FullCalendar = () => {
  const { role } = useContext(AuthContext);
  return (
    <div>
      <BaseCalendar />
      {/* {role === "expert" && (
        <> */}
      <Typography>Мои слоты</Typography>
      <SlotList />
      {/* <AddSlot /> */}
      {/* </>
      )} */}
      <Typography>Мои мероприятия</Typography>
      <MeetingList />
      <AddMeeting slotm={slot} key={"add-meet" + slot.slot_id} />
    </div>
  );
};
