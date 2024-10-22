import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../../../shared/context";
import { MeetingList } from "../../meeting-list";
import { SlotList } from "../../slot-list";
import { AddSlot } from "../../../features/add-slot";
import { Stack } from "@mui/material";
import { BaseCalendar } from "../../../entities/calendar";
import { AddMeeting } from "../../../features/add-meeting";

import { Box, Container } from "@mui/system";
const slot = {
  slot_id: 5,
  user_id: 9,
  start_time: "12:30",
  end_time: "14:30",
  description: "какие то описание",
  type_slot: "g",
  is_availible: true,
};

const style = {
  marginTop: "30px",
};
export const FullCalendar = () => {
  const { role } = useContext(AuthContext);
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "start", sm: "center" }}
        sx={style}
      >
        <BaseCalendar />
        <Box>
          <Typography variant="h5" color="primary.main" marginBottom="15px">
            Мои мероприятия
          </Typography>
          <MeetingList />
          <Typography variant="h5" color="primary.main" margin={"30px 0 15px"}>
            Мои слоты
          </Typography>
          <SlotList />
        </Box>
      </Stack>
    </Container>
  );
  {
    /* {role === "expert" && (
        <> */
  }
  {
    /* <AddSlot /> */
  }
  {
    /* </>
      )} */
  }

  {
    /* <AddMeeting slotm={slot} key={"add-meet" + slot.slot_id} /> */
  }
};
