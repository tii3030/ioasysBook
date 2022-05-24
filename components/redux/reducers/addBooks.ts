import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

type BookState = {
    book: {}
}

const initialState: BookState = {
    book: {}
}

export const BookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {
        addBook: (state, action: PayloadAction<BookState>) => {
            state.book = action.payload
        },
    },
})

export const { addBook } = BookSlice.actions

export const selectBook = (state: RootState) => state.books.book
export default BookSlice.reducer