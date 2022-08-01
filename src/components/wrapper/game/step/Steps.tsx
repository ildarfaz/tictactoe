import React from "react"
import style from "./steps.module.scss";
interface stepsProps {
    player: string;
    steps: number[];
}

export const Steps: React.FC<stepsProps> = ({ player, steps }) => {
    let stepsDiv = steps.map((step, index) => < div > {`${++index}. ${index === 1 ? 'Go to move start' : `Go to move #${step + 1}`}`}</div>)
    return (
        <div className={style.steps}>
            <div>{`Next player: ${player}`}</div>
            {stepsDiv}
        </div>
    )
}