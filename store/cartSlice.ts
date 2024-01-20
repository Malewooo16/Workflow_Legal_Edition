import { createSlice } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  value: '',
};

// Create a Redux slice
const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    // Action to set the value
    setValue: (state, action) => {
      state.value = action.payload;
    },
    // Action to clear the initial value
    clearValue: (state) => {
      state.value = initialState.value;
    },
  },
});

// Export the actions and reducer
export const { setValue, clearValue } = mySlice.actions;
export default mySlice.reducer;
