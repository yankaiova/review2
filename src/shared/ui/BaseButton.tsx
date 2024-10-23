import { Button } from "@mui/material";

type PropsBaseButton = {
  onClick?: () => void;
  text: string;
};
export const BaseButton = ({ onClick, text }: PropsBaseButton) => {
  const style = {
    padding: "5px 20px",
    backgroundColor: "#2FB3FF",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "26.56px",
    color: "white",
    textTransform: "capitalize",
    borderRadius: "20px",
  };
  return (
    <Button sx={style} onClick={onClick}>
      {text}
    </Button>
  );
};
