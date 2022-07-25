import React from "react"
import style from "./squere.module.scss";
interface squereProps {
    value:string|null,
  }

export const Squere: React.FC<squereProps> = ({value}) => {
    return (
        <div className={style.square}>{value||""}</div>
    )

}