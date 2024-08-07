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


// fetch testimnilas
export const  fetchTestimonial = createAsyncThunk(
  "fetchTestimonial",
  async(_,{rejectWithValue})=>{
    try {
      const response = await axios.get(`https://pro-backend-three-alpha.vercel.app/testimonial`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

// Delete testimonial
export const  deleteTestimonial = createAsyncThunk(
  "deleteTestimonial",
  async(id,{rejectWithValue})=>{
    try {
      const response = await axios.delete(`https://pro-backend-three-alpha.vercel.app/testimonial/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
// fetch vehicle

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

export const  getAllUser = createAsyncThunk(
  "getAllUser",
  async(_,{rejectWithValue})=>{
    try {
      const response = await axios.get(`https://pro-backend-three-alpha.vercel.app/user`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const  deleteUser = createAsyncThunk(
  "deleteUser",
  async(id,{rejectWithValue})=>{
    try {
      const response = await axios.delete(`https://pro-backend-three-alpha.vercel.app/user/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

// viewvehicle by id

export const  viewVehicle = createAsyncThunk(
  "viewVehicle",
  async(id,{rejectWithValue})=>{
    try {
      const response = await axios.get(`https://pro-backend-three-alpha.vercel.app/vehicle/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)











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
    ViewVechile:[],
    AllUser:[],
    UserType:null,
    UserName:null,
    Testimonial:[],
  },
  reducers: {
    clearTokenLogin: (state) => {
      state.Token_login = null;
      state.UserName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(loginFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.Token_login = action.payload.token;
        console.log(action.payload)
        console.log(action.payload.useType)
        state.UserType = action.payload.useType
        state.UserName = action.payload.username
        state.status = "Login Successfully"
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false;
        console.log("Error:",action.payload)
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
      .addCase(getAllUser.pending ,(state)=>{
        state.loading = true;
      }) 
      .addCase(getAllUser.fulfilled ,(state,action)=>{
        state.loading = false;
        state.AllUser = action.payload;
      })
      .addCase(getAllUser.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending,(state)=>{
        state.loading = true;
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
          state.loading = false;    
          console.log(action.payload)             
          state.status="Delete succesfully user"
        })
        .addCase(deleteUser.rejected,(action,state)=>{
          state.loading = false;
          state.error = action.payload;
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

      .addCase(viewVehicle.pending ,(state)=>{
        state.loading = true;
      })
      .addCase(viewVehicle.fulfilled ,(state,action)=>{
        state.loading = false;
        state.ViewVechile = action.payload

      })
      .addCase(viewVehicle.rejected ,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
      })

     

      .addCase(fetchTestimonial.pending ,(state)=>{
        state.loading = true
      })
      .addCase(fetchTestimonial.fulfilled , (state,action)=>{
        state.loading = false;
        state.Testimonial = action.payload
      })
      .addCase(fetchTestimonial.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
      })
      .addCase(deleteTestimonial.pending,(state)=>{
        state.loading = true;
        })
        .addCase(deleteTestimonial.fulfilled,(state,action)=>{
          state.loading = false;    
          console.log(action.payload)             
          state.status="Delete succesfully Tesimonial"
        })
        .addCase(deleteTestimonial.rejected,(action,state)=>{
          state.loading = false;
          state.error = action.payload;
        })

  },
});

export const { clearTokenLogin } = productDetails.actions; // Export the clearTokenLogin action
export default productDetails.reducer; // Corrected export
