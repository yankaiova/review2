import { Box, Rating, Typography } from "@mui/material";
import BaseModal from "../../../shared/ui/BaseBox";
import { useState } from "react";
export const Rate = () => {
  const [value, setValue] = useState<number | null>(5);

  const setRating = (e: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <BaseModal eventName="Оценить">
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Oцените встречу</Typography>
        <Rating name="simple-controlled" value={value} onChange={setRating} />
      </Box>
    </BaseModal>
  );
};
