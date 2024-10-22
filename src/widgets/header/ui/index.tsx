import { AuthContext } from "../../../shared/context";
//import { SearchForm } from "../../search";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";

export const Header = () => {
  const { role, setRole } = useContext(AuthContext);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "1%",
        borderTop: "1px solid darkblue",
        borderBottom: "1px solid darkblue",
        padding: "20px",
      }}
    >
      <Link to="/calendar">
        {" "}
        <Button>logo </Button>
      </Link>
      {role === "expert" ? (
        <>
          <Button onClick={() => setRole("client")}>Войти как заказчик</Button>
        </>
      ) : (
        <>
          {/* <SearchForm /> */}
          <Link to="/search">
            {" "}
            <Button>Найти</Button>
          </Link>
          <Button onClick={() => setRole("expert")}>Войти как эксперт</Button>
        </>
      )}
    </div>
  );
};
