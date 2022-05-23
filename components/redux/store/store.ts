import { configureStore } from "@reduxjs/toolkit";
import addToken from  '../reducers/addUser';
import addBook from  '../reducers/addBooks';

export const store = configureStore({
    reducer: {
        userToken: addToken,
        books: addBook,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch