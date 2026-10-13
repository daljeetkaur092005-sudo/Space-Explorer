import { createSlice } from "@reduxjs/toolkit";
import { currentEmployee, loginEmployee } from "./AuthAction";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      isLoading = false;
    },
    removeEmployee:(state,action)=>{
       state.employee=null,
       isLoading=true
    }
  },

  extraReducers:(builder)=>{
    builder.addCase(loginEmployee.pending,(state)=>{
        state.isLoading=true

    }).addCase(loginEmployee.fulfilled,(state,action)=>{
              state.employee=action.payload
               state.isLoading=false
    }).addCase(loginEmployee.rejected,(state)=>{
   state.isLoading=false
    }).addCase(currentEmployee.pending,(state)=>{
        state.isLoading=true

    }).addCase(currentEmployee.fulfilled,(state,action)=>{
              state.employee=action.payload
               state.isLoading=false
    }).addCase(currentEmployee.rejected,(state)=>{
   state.isLoading=false
    })
  }




});
export const {addEmployee,removeEmployee}=AuthSlice.actions
export default AuthSlice.reducer