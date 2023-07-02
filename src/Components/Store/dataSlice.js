import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
});

export const addTodo = createAsyncThunk("data/addTodo", async (todo) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todo);
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPage: 10,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setTotalPage } = dataSlice.actions;
export default dataSlice.reducer;
