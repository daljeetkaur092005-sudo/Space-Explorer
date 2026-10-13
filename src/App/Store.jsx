import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../Features/Auth/State/AuthSlice.jsx"
export const store=configureStore({
    reducer:{
        auth:authreducer,
    }
})
