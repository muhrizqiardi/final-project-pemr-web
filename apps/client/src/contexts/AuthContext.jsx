import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import env from "../helpers/env";

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
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const jobseekerToken = localStorage.getItem("jobseekerToken");
      const companyToken = localStorage.getItem("companyToken");

      if (!jobseekerToken && !companyToken) throw new Error();

      if (jobseekerToken) {
        const result = await axios.get(`${env.API_URL}/jobseekers-auth`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(jobseekerToken)}`,
          },
        });

        if (!result) throw new Error();

        setState((prev) => ({
          ...prev,
          isAuthenticated: true,
          token: JSON.parse(jobseekerToken),
          jobseeker: result.data.data,
        }));
      }

      if (companyToken) {
        const result = await axios.get(`${env.API_URL}/companies-auth`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(companyToken)}`,
          },
        });

        if (!result) throw new Error();

        setState((prev) => ({
          ...prev,
          isAuthenticated: true,
          token: JSON.parse(companyToken),
          company: result.data.data,
        }));
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isAuthenticated: false,
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const jobseekerLogin = async (email, password) => {
    try {
      const res = await axios.post(`${env.API_URL}/jobseekers-auth`, {
        email,
        password,
      });
      const token = res.data.data;
      localStorage.setItem("jobseekerToken", JSON.stringify(token));
      checkToken();
    } catch (err) {
      throw err;
    }
  };

  const companyLogin = async (email, password) => {
    try {
      const res = await axios.post(`${env.API_URL}/companies-auth`, {
        email,
        password,
      });
      const { token, company } = res.data;
      localStorage.setItem("companyToken", JSON.stringify(token));
      checkToken();
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("jobseekerToken");
    localStorage.removeItem("companyToken");
    setState((prev) => ({
      ...initialState,
      isLoading: false,
    }));
    window.location.pathname = "/";
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
