import { Link } from "@mui/material";

type PropsBaseLink = {
  path: string;
  text: string;
};
export const BaseLink = ({ path, text }: PropsBaseLink) => {
  const style = {
    fontFamily: "system-ui",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "26.56px",
    color: "#2FB3FF",
  };
  return (
    <Link href={path} underline="none" variant="body2" sx={style}>
      {text}
    </Link>
  );
};
