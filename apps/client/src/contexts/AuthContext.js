import React, { createContext, useState } from "react";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  jobseeker: null,
  company: null,
  token: null,
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const checkToken = async () => {
    try {
      const token =
        localStorage.getItem("jobseekerToken") ||
        localStorage.getItem("companyToken");
      if (!token) return;
      const res = await axios.get("/jobseekers-auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  const jobseekerLogin = async (email, password) => {
    try {
      const tokenIsValid = await checkToken();

      if (!tokenIsValid) throw new Error();

      const res = await axios.post("/jobseekers-auth", { email, password });
      const { token, jobseeker } = res.data;
      localStorage.setItem("jobseekerToken", token);
      setState({
        isAuthenticated: true,
        jobseeker,
        company: null,
        token,
      });
    } catch (err) {
      throw err;
    }
  };

  const companyLogin = async (email, password) => {
    try {
      const res = await axios.post("/companies-auth", { email, password });
      const { token, company } = res.data;
      localStorage.setItem("companyToken", token);
      setState({
        isAuthenticated: true,
        jobseeker: null,
        company,
        token,
      });
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("jobseekerToken");
    localStorage.removeItem("companyToken");
    setState(initialState);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        jobseekerLogin,
        companyLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
