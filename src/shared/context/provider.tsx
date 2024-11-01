import { AuthContext } from "./context";
import { useState, useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [role, setRole] = useState<string>("client");
  const [user_id, setUser] = useState<number>(0);

  const value = { role, setRole, user_id, setUser };
  const memoizedValue = useMemo(() => value, [value]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};
