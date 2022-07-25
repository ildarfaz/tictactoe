import { Action, ThunkDispatch, configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import { useDispatch } from "react-redux";


export const store = configureStore({
    reducer: {}})