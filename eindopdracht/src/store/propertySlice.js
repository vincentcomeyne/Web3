import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
  name: 'property',
  initialState: [],
  reducers: {
    addProperty: (state, action) => {
      state.push(action.payload);
    },
    removeProperty: (state, action) => {
      return state.filter(property => property.id !== action.payload);
    }
  }
});

export const { addProperty, removeProperty } = propertySlice.actions;

export default propertySlice.reducer;
