import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({

    // MY INITIAL STATE
    name: 'tokenData',
    initialState: {
        value: {},
    },

    // MY REDUCERS METHODS
    reducers: {
        add: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { add } = tokenSlice.actions
export default tokenSlice.reducer