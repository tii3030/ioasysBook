import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
// import { ModelBooks } from '../models/models';

export type ModelBooks = ""

const initialState: string = ""

export const BookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {
        addBook: (state, action: PayloadAction<string>) => {
            state = (action.payload)
        },
    },
})

export const selectBook = (state: RootState) => state.books
export const { addBook } = BookSlice.actions

export default BookSlice.reducer