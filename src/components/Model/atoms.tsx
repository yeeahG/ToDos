import { atom, selector } from "recoil";

export interface ITodo {
    id: number;
    text: string;
}

interface IToDoState {
    [key: string]: ITodo[];
}


export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        TODO: [],
        DOING: [],
        DONE: [],
    },
})