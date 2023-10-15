import React, { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyup = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <div className="border-2 border-[#555] rounded-md p-3 my-[20px] flex items-center">
      <div className="mr-[5px] cursor-pointer hover:bg-gray-50 transition-all rounded-full">
        ➕
      </div>
      <input
        className="bg-transparent outline-none text-white text-[18px] flex-1"
        type="text"
        placeholder="adicione uma tarefa"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        onKeyUp={handleKeyup}
      />
    </div>
  );
};

export default AddArea;
