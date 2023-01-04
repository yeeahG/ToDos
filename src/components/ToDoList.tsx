import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const toDoState = atom({
  key:"toDo",
  default: [],
})

interface IForm {
  toDo: string;
}
  
function ToDoList() {
  // //atom에 접근
  // const toDos = useRecoilValue(toDoState);
  // //atom으로 받은 빈 배열 수정
  // const setToDos = useSetRecoilState(toDoState);

  const [toDos, setToDos] = useRecoilState(toDoState)

  const {
    register, handleSubmit, setValue
  } = useForm<IForm>()

  const onSubmit = (data:IForm) => {
      console.log('add to do', data.toDo);
      setValue("toDo", "")
  }
    
  return (
    <div>
      <h1>To Do</h1>
        <hr />
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
        <input
          {...register("toDo", {
              required: "Plz write TODO",
          })}
          placeholder="Write your Todo"
        />
        <button>Add</button>
      </form>
      <ul>

      </ul>
    </div>
  );
}
export default ToDoList;