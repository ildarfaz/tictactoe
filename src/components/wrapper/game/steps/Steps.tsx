import React from "react"
import style from "./steps.module.scss";
interface stepsProps {
    player: string;
    steps: number[];
    onChangeSteps: (num: number) => void;
}

export const Steps: React.FC<stepsProps> = ({ player, steps, onChangeSteps }) => {
    const clickStep = (num: number) => {
        onChangeSteps(num);
    }
    let stepsDiv = steps.map((step, index) => <div key={index}><span>{`${index + 1}. `}</span> <button onClick={() => clickStep(index)}>{`${index === 0 ? 'Go to move start' : `Go to move #${step + 1}`}`}</button></div>);

    return (
        <div className={style.steps}>
            <div>{`Next player: ${player}`}</div>
            {stepsDiv}
        </div>
    )
}