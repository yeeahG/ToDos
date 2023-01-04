import { atom, selector } from "recoil";

interface IToDoState {
    [key: string]: string[];
}

export const minuteState = atom({
    key: "minutes",
    default: 0,
})

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        TODO: ["a", "b", "c", "d", "e", "f"],
        DOING: [],
        DONE: [],
    },
})