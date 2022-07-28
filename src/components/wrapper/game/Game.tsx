import React, { useState } from "react";
import style from "./game.module.scss"
import { Board } from "./board/Board";

export const Game = () => {
    const [squares, setSqueres] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const onChangeSquare = (num: number) => {
        setPlayer(player === 'X' ? 'O' : 'X');
        setSqueres(() => squares.map((el, index) => index === num&&!el ? player : el));
    }
    return (
        <div className={style.game}>
            <Board squares={squares} onChangeSquare={onChangeSquare} />
        </div>
    )
}