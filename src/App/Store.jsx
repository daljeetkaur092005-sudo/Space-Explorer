import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../Features/Auth/State/AuthSlice"
export const store=configureStore({
    reducer:{
        auth:authreducer,
    }
})
