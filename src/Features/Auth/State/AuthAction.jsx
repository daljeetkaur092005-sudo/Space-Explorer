import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await axiosInstance.post("/auth/login", credentials);
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const currentEmployee = createAsyncThunk(
  "api/auth/me",
  async (_, thunkApi) => {
    try {
      let res = await axiosInstance.get("/auth/me");
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
