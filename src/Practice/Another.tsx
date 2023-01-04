import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { minuteState } from "../components/Model/atoms";
import { hourSelector } from "./AnoAtoms";

function Another () {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    }

    const [hours, setHours] = useRecoilState(hourSelector);
    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    }

    return (
        <div>
            <input 
                value={minutes} 
                onChange={onMinutesChange}
                type="number" 
                placeholder="Minutes" 
            />
            <input 
                onChange={onHoursChange}
                value={hours} type="number" 
                placeholder="Hours" 
            />
        </div>
    )
}

export default Another;