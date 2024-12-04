import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  userData: unknown;
  error: string | null;
  fetchToken: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const fetchToken = async () => {
    try {
      const response = await fetch("/api/auth/token");
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      const result = await response.json();
      setUserData(result.user);
      setAuthenticated(true);
    } catch (err: unknown) {
      setError(err as never);
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, error, fetchToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
