import { useEffect, useState, createContext } from "react";
import axiosInstance from "./axiosInstance";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const result = await axiosInstance.get("/companies-auth");

      setUser(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getUser();
    setIsLoading(false);
  }, []);

  return <AuthContext.Provider value={{ user, isLoading }} {...props} />;
}

export { AuthContext, AuthProvider };
