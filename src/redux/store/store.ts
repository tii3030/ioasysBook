import { configureStore } from "@reduxjs/toolkit";
import addUser from  '../reducers/addUser';
import addBook from  '../reducers/addBooks';
import addBookId from  '../reducers/addBookId';

export const store = configureStore({
    reducer: {
        user: addUser,
        books: addBook,
        bookId: addBookId,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch