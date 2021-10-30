import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((elem) => elem.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((elem) => {
        if (elem.id === action.payload.id) {
          return {
            ...elem,
            item: action.payload.item,
          };
        }
        return elem;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
