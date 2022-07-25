import React from "react";
import style from "./game.module.scss"
import { Board } from "./board/Board";
interface GameProps {
}

export const Game: React.FC<GameProps> = ({ }) => {
    const squares = [[null, null, null], ["O", "X", "X"], [null, null, null]];
    return (
        <div className={style.game}>
            <Board squares={squares} />
        </div>
    )
}