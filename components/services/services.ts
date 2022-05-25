import { getApiBooks } from "./get_books";
import { getApiLogin } from './login_request';
import { getApiBookId } from './detailsBook';
import { LoginModel } from '../models/models'

export const submitLogin = async (login: LoginModel) => {
    let response = await getApiLogin(login);
    return response;
}

export const getAllBooks = async (token: string) => {
    let response = await getApiBooks(token);
    return response;
}

export const getBookId = async (id: string, token: string) => {
    let response = await getApiBookId(id, token);
    return response;
}