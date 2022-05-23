export async function Fetch_Books(token: string, category?: string) : Promise<any> {

    let resp: {} = {};

    await fetch('https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=' + category, {
        method: 'GET',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Authorization': 'bearer ' + token,
        }
    })
    .then(response => response.json())
    .then((response) => {
        resp = (response);
    })
    .catch(err => console.log(err))

    return resp;
}