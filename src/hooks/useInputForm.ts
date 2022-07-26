import { ChangeEvent, useCallback, useState } from "react";

const useInput = <Type>(initialForm: Type) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm: Type) => ({ ...prevForm, [name]: value }));
  }, []);

  return { form, onChange };
};

export default useInput;
