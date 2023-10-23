import { createSlice } from '@reduxjs/toolkit';

// Define a TypeScript interface for the state
interface ThemeState {
  theme: "dark" | "light";
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: "dark",
  } as ThemeState, // Initialize with the ThemeState interface.
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
