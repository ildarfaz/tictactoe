import React from "react";
import { Squere } from "./square/Squere";
import style from "./board.module.scss";

interface BoardProps {
    squares: (null | string)[],
    onChangeSquare: (num: number) => void
}

export const Board: React.FC<BoardProps> = ({ squares, onChangeSquare }) => {
    let board = squares.map((el, index) => <Squere value={el} index={index} key={index} onChangeSquare={onChangeSquare} />);
    [3, 7].map((num, index) => board.splice(num, 0, <div className={style.break} key={num+10}></div>))
    return (
        <div className={style.board}>
            {board}
        </div>
    )
}