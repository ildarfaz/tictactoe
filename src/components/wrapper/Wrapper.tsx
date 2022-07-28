import React, { useState } from "react";
import style from "./wrapper.module.scss"
import { Game } from "./game/Game";

export const Wrapper = () => {
    const [isPlay, setIsPlay] = useState(false);
    const onPlay = () => {
        setIsPlay(true);
    }
    const onClose = () => {
        
    }
    return (
        <div className={style.wrapper}>
            {!isPlay && <div>
                Хочешь сыграть?
                <div>
                    <button onClick={() => onPlay()}>Да</button>
                    <button onClick={() => onClose()}>Нет</button>
                </div>
            </div>}
            {isPlay && <Game />}
        </div>
    )
}