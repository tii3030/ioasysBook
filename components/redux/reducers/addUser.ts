import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    // MY INITIAL STATE
    name: 'addUser',
    initialState: {
        value: 
        {
            birthdate: "",
            email: "",
            gender: "",
            id: "",
            name: ""
        }
    },

    // MY REDUCERS METHODS
    reducers: {
        add: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { add } = userSlice.actions
export default userSlice.reducer