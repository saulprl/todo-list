import { ChangeEventHandler, FC, FormEvent, useState } from "react";

interface Props {
  onFormSubmit: (todoTitle: string) => void;
}

export const TodoForm: FC<Props> = ({ onFormSubmit }) => {
  const [value, setValue] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value.trim()) {
      setValue("");

      return;
    }

    onFormSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center flex-grow gap-2">
      <input
        type="text"
        placeholder="Write a ToDo!"
        value={value}
        onChange={handleInputChange}
        required
        className="bg-violet-300 rounded-md text-black placeholder-violet-700/50 p-2 flex-grow"
      />
      <button className="p-2 bg-[#7145d6] text-white rounded-md hover:bg-violet-700 transition-colors duration-300">
        Submit
      </button>
    </form>
  );
};
