import { Typography } from "@mui/material";

type PropsBaseTypography = {
  children: React.ReactNode;
};
export const BaseTypography = ({ children }: PropsBaseTypography) => {
  const style = {
    fontFamily: "system-ui",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "26.56px",
  };
  return (
    <Typography sx={style} color="text.main">
      {children}
    </Typography>
  );
};
