import { configureStore} from '@reduxjs/toolkit'
import { profileSlice } from './githubSlice'

export const store = configureStore({
    reducer: {
      profiles: profileSlice.reducer,
    },
  })
  
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
