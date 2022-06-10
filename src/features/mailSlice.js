import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mailDetails: null,
  },

  reducers: {
    getMailDetails: (state, action) => {
      state.mailDetails = action.payload;
    },
  },
});

export const { getMailDetails } = mailSlice.actions;

export const selectMail = (state) => state.mail.mailDetails;

export default mailSlice.reducer;
