import React, { useReducer } from "react";
import style from "./game.module.scss"
import { Board } from "./board/Board";
import { Steps } from "./steps/Steps";
const ADD_SQUARE = "ADD_SQUARE";
const ADD_STORY = "ADD_STORY";

export const Game = () => {
    const initialState = {
        squares: Array(9).fill(null),
        player: 'X',
        steps: [0],
        story: []
    };
    const reducer = (state: { player: string, squares: (string | null)[], steps: number[], story: (string | null)[][] }, action: { type: string, payload: { num: number } }) => {
        switch (action.type) {
            case ADD_SQUARE:
                return {
                    ...state,
                    player: state.player === 'X' ? 'O' : 'X',
                    squares: state.squares.map((el, index) => index === action.payload.num && !el ? state.player : el),
                    steps: [...state.steps, action.payload.num],
                };
                case ADD_STORY:
                    return {
                        ...state,
                        story: [...state.story, ...state.squares],
                    }
            default:
                throw state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeSquare = (num: number) => {
        dispatch({ type: ADD_SQUARE, payload: { num } })
        dispatch({type: ADD_STORY})
    }
    const onChangeSteps = (num: number) => {
        console.log(state.story)
    }
    return (
        <div className={style.game}>
            <div className={style.board}>
                <Board squares={state.squares} onChangeSquare={onChangeSquare} />
            </div>
            <Steps player={state.player} steps={state.steps} onChangeSteps={onChangeSteps} />
        </div>
    )
}