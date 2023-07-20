import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed, }
          : task
      );
    },
  },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;