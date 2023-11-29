import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    sendDataToEvent: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { sendDataToEvent } = eventSlice.actions;

export default eventSlice.reducer;
