import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { Typography } from "@mui/material";
import { MeetingList } from "../../meeting-list/ui";
import { SlotList } from "../../slot-list/ui";
import { AddSlot } from "../../../features/add-slot/ui";
import { BaseCalendar } from "../../../entities/calendar/ui";

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
