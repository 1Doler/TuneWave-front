import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axiox";

import { IUser } from "../../interface/user.iterface";
import { Inputs, InputsProfile } from "../../page-components";
import { RootState } from "../store";
import { UpdateProfileBody, updateProfile } from "../../api";

interface IInitialState {
  user: IUser | null;
  loading: boolean | "error";
}

const initialState: IInitialState = {
  user: null,
  loading: false,
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (body: Inputs) => {
    const { data } = await axios.post("/auth/login", body, {
      withCredentials: true,
    });
    return data;
  }
);

export const fetchUserDataMe = createAsyncThunk(
  "auth/fetchUserData",
  async () => {
    const { data } = await axios.get("/auth/getprofile", {
      withCredentials: true,
    });
    return data;
  }
);

export const fetchUpdateUser = createAsyncThunk(
  "auth/fetchUpdateUser",
  async (body: UpdateProfileBody) => {
    const { data } = await axios.post("/auth/user", body, {
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
        state.user = null;
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchLogin.rejected, state => {
        state.user = null;
        state.loading = "error";
      })
      .addCase(fetchUserDataMe.pending, state => {
        state.user = null;
        state.loading = true;
      })
      .addCase(
        fetchUserDataMe.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserDataMe.rejected, state => {
        state.user = null;
        state.loading = "error";
      })
      .addCase(fetchUpdateUser.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchUpdateUser.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUpdateUser.rejected, state => {
        state.loading = "error";
      });
  },
});

export const usersReducer = usersSlice.reducer;
export const selectIsAuth = (state: RootState) => !!state.user.user;
