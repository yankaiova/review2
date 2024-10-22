import { Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type PropsBaseModal = {
  children?: React.ReactNode;
};

export function BaseBox({ children }: PropsBaseModal) {
  return <Box sx={style}>{children}</Box>;
}
