import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const i = state.findIndex(t => t.id === action.payload);
      if(i >= 0) state.splice(i, 1);
    },
    updateTask: (state, action) => {
      const task = state.find(t => t.id === action.payload.id);
      for(let key in task){
        if(task[key]) task[key] = action.payload[key];
      }
    }
  },
});

export const {addTask, deleteTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;
