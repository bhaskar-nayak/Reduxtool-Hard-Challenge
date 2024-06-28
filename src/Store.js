import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from './Slices/Challenge.slice';
export const store=configureStore({
    reducer:{
        challenges:challengeReducer,
    }
});