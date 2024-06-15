import { ChangeEvent, FC, FormEvent, useState } from "react";

import { Button } from "../button/button";

interface Props {
  onSubmit: (value: string) => void;
}

export const TodoForm: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-stretch gap-2">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="flex-grow px-2 bg-purple-300 rounded-md"
      />
      <Button className="rounded-full">Submit</Button>
    </form>
  );
};
