import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./Create/CreateToDo";
/*
interface IForm {
  toDo: string;
}


interface IToDo {
  category: "TODO"|"DOING"|"DONE";
  text: string;
  id: number;
}

const toDoState = atom<IToDo[]>({
  key:"toDo",
  default: [],
})
*/

  
function ToDoList() {
  // //atom에 접근
  // const toDos = useRecoilValue(toDoState);
  // //atom으로 받은 빈 배열 수정
  // const setToDos = useSetRecoilState(toDoState);
  //const { register, handleSubmit, setValue } = useForm<IForm>()

  //const [toDos, setToDos] = useRecoilState(toDoState)
  const toDos = useRecoilValue(toDoState)

{/*
  const onSubmit = ({toDo}:IForm) => {
    //console.log('add to do', data.toDo);
    setValue("toDo", "")
    setToDos(oldToDos => [{text:toDo, category: "TODO", id: Date.now()}, ...oldToDos])
  };
  console.log(toDos); */}
    
  return (
    <div>
      <h1>To Do</h1>
        <hr />
        <CreateToDo />
        {/*
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
        </form> */}
      <ul>
        {toDos.map(toDo => 
          <li key={toDo.id}>
            {toDo.text}
          </li>
        )}
      </ul>
    </div>
  );
}
export default ToDoList;