import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export interface  profiles {
  profiles: []
  pending:string
  loading:boolean
}

const initialState:  profiles = {
  profiles: [],
  pending:"idle",
  loading:true
}

export const fetchProfiles=createAsyncThunk("profiles/fetchProfiles",async()=>{
      const response=await axios(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${1}`)
      return response.data
})

export const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state, action) => {
           state.pending="pening"
           state.loading=true
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.profiles=action.payload
        state.pending="idle"
        state.loading=false
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
          state.loading=false
      })
  },
})

// Action creators are generated for each case reducer function

export default profileSlice.reducer