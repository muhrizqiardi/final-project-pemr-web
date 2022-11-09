import { useState } from "react";

function useError(initialIsError = false, initialErrorMessage = "") {
  const [isError, setIsError] = useState(initialIsError);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  const setError = (isError, errorMessage = "") => {
    setIsError(isError);
    setErrorMessage(errorMessage);
  };

  return {
    setError,
    isError,
    errorMessage,
    setIsError,
    setErrorMessage,
  };
}

export default useError;
