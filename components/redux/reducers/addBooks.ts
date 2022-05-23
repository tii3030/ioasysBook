import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface BookState {
    book: {
        authors: [],
        category: string,
        description: string,
        id: string,
        imageUrl: string,
        isbn10: string,
        isbn13: string,
        language: string,
        pageCount: number,
        published: number,
        publisher: string,
        title: string
    }
}

const initialState: BookState = {
    book: {
        authors: [],
        category: '',
        description: '',
        id: '',
        imageUrl: '',
        isbn10: '',
        isbn13: '',
        language: '',
        pageCount: 0,
        published: 0,
        publisher: '',
        title: ''
    }
}

export const BookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {
        addBook: (state, action: PayloadAction<BookState>) => {
            // console.log(action.payload);
            state.book = action.payload
        },
    },
})

export const { addBook } = BookSlice.actions

export const selectBook = (state: RootState) => state.books.value
export default BookSlice.reducer