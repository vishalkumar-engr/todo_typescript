import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputBox: React.FC<Props> = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRefs = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRefs?.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a task"
        className="input-box"
        ref={inputRefs}
        onChange={(event) => setTodo(event?.target.value)}
        value={todo}
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputBox;
