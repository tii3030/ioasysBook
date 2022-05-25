import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { ModelBookId } from '../../models/models';

const initialState: ModelBookId = {
    book: {
        authors: [],
        title: '',
        description: '',
        pageCount: 0,
        category: '',
        imageUrl: '',
        language: '',
        isbn10: '',
        isbn13: '',
        publisher: '',
        published: 0,
        id: ''
    }
}

export const BookSlice = createSlice({
  name: 'addBookId',
  initialState,
  reducers: {
        addBookId: (state, action: PayloadAction<ModelBookId>) => {
            state.book = (action.payload.book)
        },
    },
})

export const selectBook = (state: RootState) => state.bookId
export const { addBookId } = BookSlice.actions
export default BookSlice.reducer