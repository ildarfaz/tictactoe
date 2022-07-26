import React, { useState } from "react";
import style from "./game.module.scss"
import { Board } from "./board/Board";

export const Game = () => {
    const [squares, setSqueres] = useState(Array(9).fill(null));
    return (
        <div className={style.game}>
            <Board squares={squares} />
        </div>
    )
}