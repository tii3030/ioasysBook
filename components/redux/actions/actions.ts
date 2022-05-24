import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {addBook} from '../reducers/addBooks'
import { RootState } from "../store/store";
import { ModelBooks } from '../models/models';
import { getAllBooks } from '../../services/services'

// export const FetchBooks = (): ThunkAction<void, RootState, unknown, AnyAction> => {
//     return async (dispatch, getState) => {
//         const response: string = await getAllBooks();
//         dispatch(addBook("Teste"));
//     }
// }


export const FetchBooks = (message: string): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        const response: string = await getAllBooks();
        dispatch(addBook("Teste"));
    }