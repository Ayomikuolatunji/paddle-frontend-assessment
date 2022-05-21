import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'

export interface CounterState {
  profiles: []
}

const initialState: CounterState = {
  profiles: [],
  
}

export const fetchProfiles=createAsyncThunk("profiles/fetchProfiles",async()=>{
      
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers:{
       
  }
})

// Action creators are generated for each case reducer function


export default counterSlice.reducer