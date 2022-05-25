import { ModelBookId } from "../models/models";

export async function getApiBookId(id: string, token: string) {

    let resp: ModelBookId = {book: {}};

    await fetch('https://books.ioasys.com.br/api/v1/books/' + id, {
        method: 'GET',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Authorization': 'bearer ' + token,
        }
    })
    .then(response => response.json())
    .then((response) => {
        resp = ({ book: response });
    })
    .catch(err => console.log(err))

    return resp;
}