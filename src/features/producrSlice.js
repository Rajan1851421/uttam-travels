import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const  DeleteVechile = createAsyncThunk(
  "DeleteVechile",
  async(id,{rejectWithValue})=>{
    try {
      const response = await axios.delete(`https://pro-backend-three-alpha.vercel.app/vehicle/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


export const  fetchVechile = createAsyncThunk(
  "fetchVechile",
  async(_,{rejectWithValue})=>{
    try {
      const response = await axios.get(`https://pro-backend-three-alpha.vercel.app/vehicle`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)









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
      const response = await fetch('https://pro-backend-three-alpha.vercel.app/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data; // Return the data, not the entire response
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
    vechiles:[],
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

      .addCase(fetchVechile.pending,(state)=>{
        state.loading = true;
      })
      .addCase(fetchVechile.fulfilled,(state,action)=>{
        state.loading = false;
        state.vechiles = action.payload
      })
      .addCase(fetchVechile.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
      })      


      .addCase(DeleteVechile.pending,(state)=>{
      state.loading = true;
      })
      .addCase(DeleteVechile.fulfilled,(state)=>{
        state.loading = false;
        state.status="Delete succesfully"
      })
      .addCase(DeleteVechile.rejected,(action,state)=>{
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export const { clearTokenLogin } = productDetails.actions; // Export the clearTokenLogin action
export default productDetails.reducer; // Corrected export
