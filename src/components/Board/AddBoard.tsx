import clsx from "clsx";
import { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import {toDoState} from '../Model/atoms';
import { useForm, SubmitHandler } from "react-hook-form";

const AddContainer = styled.div`
    .open {
        display: block;
    }
    .hidden {
        display: none;
    }
`;

interface NewBoardType {
    newboard?: string;
}

function AddBoard() {
    const [open, setOpen] = useState(false);
    const [toDos, setToDos] = useRecoilState(toDoState)
    const { register, setValue, handleSubmit } = useForm();

    const onOpen = () => {
        console.log("open");
        setOpen(true)
    };

    const onValid: SubmitHandler<NewBoardType> = ({ newboard }) => {
        setToDos({
            ...toDos,
            [newboard + ""]: []
        });
        setValue("newboard","")
    };

    return (
        <AddContainer>
            {!open && <button onClick={onOpen}>+ Add new List</button>}
            <form
                className={clsx(open ? 'open' : 'hidden')}
                onSubmit={handleSubmit(onValid)}
            >
                <input 
                    placeholder="새로운 List를 입력해주세요"
                    type={'text'}
                    {...register("newboard",{required: true})}
                />
            </form>
        </AddContainer>
    );
}
export default AddBoard;