import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { UserModel } from '../../models/models'

const initialState: UserModel = {
    Authorization: '',
    User: {
        birthdate: '',
        email: '',
        gender: '',
        id: '',
        name: ''
    }
}

export const userSlice = createSlice({
    name: 'addUser',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserModel>) => {
            state.Authorization = action.payload.Authorization
            state.User = action.payload.User
        },
    },
})

export const { addUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer