import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface BookState {
    value: {

    }
}

const initialState: BookState = {
    value: {}
}

export const BookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { add } = BookSlice.actions

export const selectBook = (state: RootState) => state.books.value
export default BookSlice.reducer