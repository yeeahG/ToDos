import React, { useState } from "react";
import { useForm } from "react-hook-form";

  interface IForm {
    toDo: string;
  }
  
  function ToDoList() {
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