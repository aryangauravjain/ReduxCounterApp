import { createReducer } from "@reduxjs/toolkit";

export const countReducer = createReducer(
  {
    count:0,
  },
  {
    
    decrement: (state, action) => {
      if(state.count > 1){
        state.count-=1;
      }else{
        alert("Counter cann't be Decremented.")
      }
    },
    increment: (state,action) => {
        state.count+=1;
    }

  }
);