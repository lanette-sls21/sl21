import { useState } from "react";

export const useInput = (inputSchema: any) => {
  const [inputValues, setInputValues] = useState(inputSchema);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return [inputValues, handleInputChange];
};
