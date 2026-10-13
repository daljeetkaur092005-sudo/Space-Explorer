import { configureStore } from "@reduxjs/toolkit";
import authreducer  from "../features/Auth/State/AuthSlice"
export const store=configureStore({
    reducer:{
        auth:authreducer,
    }
})
