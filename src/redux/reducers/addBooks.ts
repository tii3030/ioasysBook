import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { ModelBooks } from '../../models/models';

const initialState: ModelBooks = {
    books: [{
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
	}]
}

export const BookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {
        addBook: (state, action: PayloadAction<ModelBooks>) => {
            state.books = (action.payload.books)
        },
    },
})

export const selectBook = (state: RootState) => state.books
export const { addBook } = BookSlice.actions

export default BookSlice.reducer