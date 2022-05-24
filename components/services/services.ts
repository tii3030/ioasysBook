import { Fetch_Book } from "./get_books";

export const getAllBooks = async () => {
    let response = await Fetch_Book();
    let oi: string = "string"
    return oi;
}