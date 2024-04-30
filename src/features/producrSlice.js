import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data; // Return the data, not the entire response
    } catch (error) {
      return rejectWithValue(error.message); // Return error message
    }
  }
);

export const loginFetch = createAsyncThunk(
  "loginFetch",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      return response.data; // Return the data, not the entire response
    } catch (error) {
      return rejectWithValue(error.message); // Return error message
    }
  }
);

export const productDetails = createSlice({
  name: "productDetails", // Corrected spelling
  initialState: {
    products: [],
    successMessage: null,
    status: "",
    Token_login: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearTokenLogin: (state) => {
      state.Token_login = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.Token_login = action.payload.token;
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { clearTokenLogin } = productDetails.actions; // Export the clearTokenLogin action
export default productDetails.reducer; // Corrected export
