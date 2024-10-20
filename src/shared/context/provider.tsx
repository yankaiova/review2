import { AuthContext } from "./context";
import { useState, useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [role, setRole] = useState<string>("client");

  const value = { role, setRole };
  const memoizedValue = useMemo(() => value, [value]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};
