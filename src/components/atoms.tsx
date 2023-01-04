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

const localStorageEffect = (key: string) => ({setSelf, onSet}: any) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue: any , _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
    effects: [
        localStorageEffect('toDo'),
    ]
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
