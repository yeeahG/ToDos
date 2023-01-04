import { atom, selector } from "recoil";

type categories = "TODO"|"DOING"|"DONE"

export interface IToDo {
    category: categories;
    text: string;
    id: number;
}

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category)
    }
}) 


export const categoryState = atom<categories>({
    key: "category", 
    default: "TODO",
})