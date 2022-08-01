import React from "react"
import style from "./squere.module.scss";
interface squereProps {
    value: string | null,
    index: number,
    onChangeSquare: (num: number) => void,
}

export const Squere: React.FC<squereProps> = ({ value, index, onChangeSquare }) => {

    return (
        <div className={style.square} onClick={() => !value && onChangeSquare(index)} >{value || ""} </div>
    )
}