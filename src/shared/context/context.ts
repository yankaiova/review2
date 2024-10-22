import { createContext } from "react";
type Props = {
  role: string | null;
  setRole: (value: string) => void;
  user_id: number;
  setUser: (value: number) => void;
};
export const AuthContext = createContext<Props>({
  role: "client",
  setRole: () => {},
  user_id: 0,
  setUser: () => {},
});
