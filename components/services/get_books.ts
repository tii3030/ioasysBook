import { ModelBooks } from "../models/models";

export async function getApiBooks(token: string, category?: string){

    let resp: ModelBooks = { books: [{}] };

    await fetch('https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=' + (!(category === undefined) ? category : ''), {
        method: 'GET',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Authorization': 'bearer ' + token,
        }
    })
    .then(response => response.json())
    .then((response) => {
        resp = ({ books: response.data });
    })
    .catch(err => console.log(err))

    return resp;
}