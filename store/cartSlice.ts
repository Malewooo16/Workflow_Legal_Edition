import { createSlice } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  value: '',
  userData:{
    userId:'',
    userEmail:''
  }
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

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    // Action to clear the initial value
    clearUserData: (state) => {
      state.userData = initialState.userData;
    },
  },
});

// Export the actions and reducer
export const { setValue, clearValue, setUserData, clearUserData } = mySlice.actions;
export default mySlice.reducer;
