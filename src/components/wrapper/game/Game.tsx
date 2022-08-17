import React, { useReducer } from "react";
import style from "./game.module.scss"
import { Board } from "./board/Board";
import { Steps } from "./steps/Steps";
enum ActionTypes {
    ADD_SQUARE = "ADD_SQUARE",
    ADD_STORY = "ADD_STORY",
    BACK_STORY = "BACK_STORY",
    CHANGE_STORY = "CHANGE_STORY",
}
interface Action {
    type: ActionTypes;
    payload?: any
}
interface GameState {
    player: string,
    squares: (string | null)[],
    steps: number[],
    story: any[],
    isBackStory: boolean,
    numberStory: number,
    isWinner: boolean
}
export const Game = () => {
    const initialState = {
        squares: Array(9).fill(null),
        player: 'X',
        steps: [0],
        story: [Array(9).fill(null)],
        isBackStory: false,
        numberStory: 0,
        isWinner: false
    };

    const reducer = (state: GameState, action: Action) => {
        switch (action.type) {
            case ActionTypes.ADD_SQUARE:
                return {
                    ...state,
                    player: state.player === 'X' ? 'O' : 'X',
                    squares: state.squares.map((el, index) => index === action.payload.num ? state.player : el),
                    steps: [...state.steps, action.payload.num],
                };
            case ActionTypes.ADD_STORY:
                return {
                    ...state,
                    story: [...state.story, state.squares],
                }
            case ActionTypes.BACK_STORY:
                return {
                    ...state,
                    isBackStory: true,
                    squares: state.story[action.payload.num],
                    numberStory: action.payload.num,
                }
            case ActionTypes.CHANGE_STORY:
                return {
                    ...state,
                    isBackStory: false,
                    story: state.story.filter((event, index) => index <= state.numberStory),
                    steps: state.steps.filter((event, index) => index <= state.numberStory),
                    numberStory: 0
                }
            default:
                throw state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeSquare = (num: number) => {
        if (state.isBackStory) {
            dispatch({ type: ActionTypes.CHANGE_STORY })
        }
        dispatch({ type: ActionTypes.ADD_SQUARE, payload: { num } })
        dispatch({ type: ActionTypes.ADD_STORY })
    }
    const onChangeSteps = (num: number) => {
        dispatch({ type: ActionTypes.BACK_STORY, payload: { num } })
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