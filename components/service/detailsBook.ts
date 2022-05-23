export async function DetailsBook(id: string, token: string) : Promise<any> {

    let resp: {} = {};

    await fetch('https://books.ioasys.com.br/api/v1/books/' + id, {
        method: 'GET',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Authorization': 'bearer ' + token,
        }
    })
    .then(response => response.json())
    .then((response) => {
        resp = response;
    })
    .catch(err => console.log(err))

    return resp;
}