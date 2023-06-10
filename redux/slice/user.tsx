import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axiox";

import { IUser } from "../../interface/user.iterface";
import { InputsProfile } from "../../page-components";

interface IInitialState {
  user: IUser;
  loading: boolean | "error";
}

const initialState: IInitialState = {
  user: {} as IUser,
  loading: false,
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (body: InputsProfile) => {
    const { data } = await axios.post("/auth/login", body, {
      withCredentials: true,
    });
    return data;
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLogin.pending, state => {
        state.user = {} as IUser;
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchLogin.rejected, state => {
        state.user = {} as IUser;
        state.loading = "error";
      });
  },
});

export const usersReducer = usersSlice.reducer;
