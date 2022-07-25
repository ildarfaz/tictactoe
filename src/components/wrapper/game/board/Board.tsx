import React from "react";
import { Squere } from "./square/Squere";
import style from "./board.module.scss";

interface BoardProps {
    squares: (string | null)[][],
}

export const Board: React.FC<BoardProps> = ({ squares }) => {
    const board = squares.map(el => <div>{el.map(item => <Squere value={item} />)}</div>)
    return (
        <div className={style.board}>
            {board}
        </div>
    )
}