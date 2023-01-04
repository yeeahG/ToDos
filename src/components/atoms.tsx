import { atom, selector } from "recoil";

//type categories = "TODO"|"DOING"|"DONE"
export enum Categories {
    "TODO" = "TODO", 
    "DOING" = "DOING", 
    "DONE"  = "DONE",
}

export interface IToDo {
    category: Categories;
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


export const categoryState = atom<Categories>({
    key: "category", 
    default: Categories.TODO,
})
