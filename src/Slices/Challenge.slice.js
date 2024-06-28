import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChallenges = createAsyncThunk(
    'challenges/fetchChallenges',
    async () => {
      const response = await axios.get('https://spring-hard-challenge-production.up.railway.app/myapp/listChallanges');
      return response.data;
    }
  );

  const challengeSlice = createSlice({
    name: 'challenges',
    initialState: {
      items: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
       .addCase(fetchChallenges.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChallenges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export default challengeSlice.reducer;