import React, { useState } from "react";
import style from "./game.module.scss"
import { Board } from "./board/Board";
import { Steps } from "./step/Steps";

export const Game = () => {
    const [squares, setSqueres] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [steps, setSteps] = useState([0]);
    const onChangeSquare = (num: number) => {
        setPlayer(player === 'X' ? 'O' : 'X');
        setSteps([...steps, num]);
        setSqueres(() => squares.map((el, index) => index === num && !el ? player : el));
    }
    return (
        <div className={style.game}>
            <div className={style.board}>
                <Board squares={squares} onChangeSquare={onChangeSquare} />
            </div>
            <Steps player={player} steps={steps} />
        </div>
    )
}