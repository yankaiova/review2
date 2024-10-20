import { createContext } from "react";
type Props = {
  role: string | null;
  setRole: (value: string) => void;
};
export const AuthContext = createContext<Props>({
  role: "client",
  setRole: () => {},
});
