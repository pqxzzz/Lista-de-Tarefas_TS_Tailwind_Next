import React, { useState } from "react";
import { Item } from "@/types/Item";

type Props = {
  item: Item;
  onChangeCheck: any;
};

const ListItem = ({ item, onChangeCheck }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const checkedHandler = () => {
    setIsChecked(!isChecked);
    onChangeCheck(isChecked, item.id);
  };

  return (
    <div className="flex bg-[#20212c] p-3 rounded-md mb-3 text-md items-center">
      <input
        className="w-6 h-6 mr-5 "
        checked={isChecked}
        onChange={checkedHandler}
        type="checkbox"
      />
      <label className={`text-gray-300 ${isChecked ? "line-through" : ""}  `}>
        {item.id} - {item.name} - {item.done.toString()}
      </label>
    </div>
  );
};

export default ListItem;
