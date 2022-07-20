import { ChangeEvent, useCallback, useState } from "react";

const useInput = (initialForm: any) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm: any) => ({ ...prevForm, [name]: value }));
  }, []);

  return [form, onChange];
};

export default useInput;
