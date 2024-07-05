import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the state interface
export interface ReserveCounterState {
  value: number;
}

// Initial state
const initialState: ReserveCounterState = {
  value: 19,
};

// Create the async decrement action
export const decrementAsync = createAsyncThunk<number, void, {}>(
  "reserveCounter/decrementAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return -1; // Decrement by 1
  }
);

// Create the slice
const reserveCounterSlice = createSlice({
  name: "reserveCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
      if (state.value > 0) {
        state.value += action.payload;
      }
    });
  },
});

export const { increment } = reserveCounterSlice.actions;
export default reserveCounterSlice.reducer;
