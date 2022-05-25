import { AnyAction } from "@reduxjs/toolkit"
import { ThunkAction } from "@reduxjs/toolkit"
import { addBook } from '../reducers/addBooks'
import { addUser } from '../reducers/addUser'
import { addBookId } from '../reducers/addBookId'
import { RootState } from "../store/store"
import { ModelBooks, UserModel, LoginModel, ModelBookId } from '../../models/models'
import { submitLogin, getAllBooks, getBookId } from '../../services/services'

export const FetchLogin = (login: LoginModel): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        const response: UserModel = await submitLogin(login);
        dispatch(addUser(response));
    }
    
export const FetchBooks = (category?: string): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch, getState) => {
        const response: ModelBooks = await getAllBooks(getState().user.Authorization, category);
        dispatch(addBook(response));
    }

export const FetchBookId = (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch, getState) => {
        const response: ModelBookId = await getBookId(id, getState().user.Authorization);
        dispatch(addBookId(response));
    }