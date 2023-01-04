import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
  }

function CreateToDo() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const category = useRecoilValue(categoryState);

    const {
      register, handleSubmit, setValue
    } = useForm<IForm>()
  
    const onSubmit = ({toDo}:IForm) => {
      //console.log('add to do', data.toDo);
      setToDos(oldToDos => [
          {text:toDo, category, id: Date.now()}, 
          ...oldToDos
        ])
        setValue("toDo", "");
    };
    
  

    return (
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
    );
}

export default CreateToDo;