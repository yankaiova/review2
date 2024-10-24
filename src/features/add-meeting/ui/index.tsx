import { Typography, FormControl, Switch } from "@mui/material";
import { BaseBox, BaseButton, BaseTypography } from "../../../shared/ui";
import { useState } from "react";
import { Box, List, ListItem, Divider, TextField } from "@mui/material";

export const AddMeeting = () => {
  const [s, setS] = useState<string[]>([]);

  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const style = {
    marginTop: "7px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const style1 = {
    py: 0,
    width: "100%",
    maxWidth: 360,
    borderColor: "divider",
  };
  return (
    <BaseBox>
      <Box sx={style}>
        <Typography variant="h5" component="div">
          День
        </Typography>
        <Typography variant="h5" component="div" color="#2FB3FF">
          24.10.2024
        </Typography>
      </Box>
      <Box sx={style}>
        <BaseTypography>Начало</BaseTypography>
        <BaseTypography>12:00</BaseTypography>
      </Box>
      <Box sx={style}>
        <BaseTypography>Конец</BaseTypography>
        <BaseTypography>13:00</BaseTypography>
      </Box>
      <FormControl>
        <Typography color="#2FB3FF">Встреча на 60 минут</Typography>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-berween",
            alignItems: "center",
          }}
        >
          <Switch
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
          <div>{checked === true ? "offline" : "online"}</div>
        </div>
        <Typography variant="body1" component="div" marginTop="15px">
          Материалы
        </Typography>
        <List sx={style1}>
          <ListItem>
            {" "}
            <Typography color="#2FB3FF">Ссылка на диск</Typography>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem>
            {" "}
            <Typography color="#2FB3FF">Репозиторий</Typography>
          </ListItem>
        </List>
        <BaseButton text="Прикрепить" />
        <div style={{ marginTop: "20px" }}></div>
        <TextField
          id="outlined-textarea"
          label="Описание"
          placeholder="Добавьте описание"
          multiline
        />
        <div style={{ marginTop: "20px" }}></div>
        <BaseButton text="Сохранить" />
      </FormControl>
    </BaseBox>
  );
};
