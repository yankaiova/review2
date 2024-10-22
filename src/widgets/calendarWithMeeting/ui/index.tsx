import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../../../shared/context";
import { MeetingList } from "../../meeting-list";
import { SlotList } from "../../slot-list";
import { AddSlot } from "../../../features/add-slot";
import { BaseCalendar } from "../../../entities/calendar";

export const FullCalendar = () => {
  const { role } = useContext(AuthContext);
  return (
    <div>
      <BaseCalendar />
      {role === "expert" && (
        <>
          <Typography>Мои слоты</Typography>
          <SlotList />
          <AddSlot />
        </>
      )}
      <Typography>Мои слоты</Typography>
      <MeetingList />
    </div>
  );
};
