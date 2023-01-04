import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./Create/CreateToDo";
import ToDo from "./Create/List/ToDo";
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
  //const toDos = useRecoilValue(toDoState)
  //console.log(toDos);

{/*
  const onSubmit = ({toDo}:IForm) => {
    //console.log('add to do', data.toDo);
    setValue("toDo", "")
    setToDos(oldToDos => [{text:toDo, category: "TODO", id: Date.now()}, ...oldToDos])
  };*/}

  //const selectoreOutPut = useRecoilValue(toDoSelector);
  //console.log(selectoreOutPut);

  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }
  
console.log(toDos);

  return (
    <div>
      <h1>To Do</h1>
      <hr />

      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TO DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}

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
      {/*<ul>
        {toDos.map(toDo => 
          <ToDo key={toDo.id} {...toDo} /> 
          //<ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
        )}
        </ul> */}

    </div>
  );
}
export default ToDoList;