import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface UserState {
    value: string
}

const initialState: UserState = {
    value: ''
}

export const userSlice = createSlice({
  name: 'addToken',
  initialState,
  reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { add } = userSlice.actions
export const selectUser = (state: RootState) => state.userToken.value
export default userSlice.reducer