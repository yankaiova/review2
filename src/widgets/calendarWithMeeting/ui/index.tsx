import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../../../shared/context";
import { MeetingList } from "../../meeting-list";
import { SlotList } from "../../slot-list";
import { AddSlot } from "../../../features/add-slot";
import { Stack } from "@mui/material";
import { BaseCalendar } from "../../../entities/calendar";

import { Box, Container } from "@mui/system";

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
          <Typography variant="h5" color="#2FB3FF" marginBottom="15px">
            Мои мероприятия
          </Typography>
          <MeetingList />
          {role === "expert" && (
            <>
              <Typography variant="h5" color="#2FB3FF" margin={"30px 0 15px"}>
                Мои слоты
              </Typography>
              <SlotList />
              <AddSlot />
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
};
