import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    user: null,
    error: "",
}

export const loginUser = createAsyncThunk('api/login', () => {
    return axios
        .post('http://0.tcp.ap.ngrok.io:12904/api/v1/auth/login', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                'email': 'racingboy560@gmail.com',
                'password': '12345678'
            }),
        })
        .then((response) => response.data)
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;