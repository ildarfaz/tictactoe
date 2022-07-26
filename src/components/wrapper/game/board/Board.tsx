import React from "react";
import { Squere } from "./square/Squere";
import style from "./board.module.scss";

interface BoardProps {
    squares: (null | string)[],
}

export const Board: React.FC<BoardProps> = ({ squares }) => {
    let board = squares.map((el, index) => <Squere value={el} key={index} />);
    [3, 7].map(num => board.splice(num, 0, <div className={style.break}></div>))
    return (
        <div className={style.board}>
            {board}
        </div>
    )
}