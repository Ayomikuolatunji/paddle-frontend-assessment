import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

interface  profiles {
  profiles: []
  pending:string
  loading:boolean
}

const initialState:profiles = {
  profiles: [],
  pending:"idle",
  loading:true
}

// createAsyncThunk is used to fetch github profiles 

export const fetchProfiles=createAsyncThunk("profiles/fetchProfiles",async(id: number, { getState})=>{

    const response=await axios(`https://api.github.com/search/repositories?q=created:>2021-08-13&q=stars:>=1&sort=stars&order=desc&page=${id}`)

    return response.data.items

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

// Exported the profileSlice.reducer ./store 
export default profileSlice.reducer