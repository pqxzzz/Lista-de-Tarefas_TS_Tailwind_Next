"use client";

import AddArea from "@/components/AddArea";
import ListItem from "@/components/ListItem";
import { Item } from "@/types/Item";
import React, { useState } from "react";

const page = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    // criar lista clone
    let newList = [...list];
    // adicionar na lista clone
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    // setar lista clone na lista original
    setList(newList);
  };

  // desafio mudar no aray original se foi feito ou nao
  const handleCheckTask = (checkedTask: boolean, id: number) => {
    for (let i = 0; i < list.length; i++) {
      if (checkedTask === true && list[i].id === id) {
        list[i].done = false;
      } else {
        list[i].done = true;
      }
    }
  };

  return (
    <div className="bg-[#17181f] text-[#797a81] w-sreen h-screen">
      <div className="m-auto max-w-4xl p-10">
        <h1 className="font-bold text-3xl text-white text-center border-b border-gray-600 pb-[15px]">
          Lista de Tarefas
        </h1>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem onChangeCheck={handleCheckTask} item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
