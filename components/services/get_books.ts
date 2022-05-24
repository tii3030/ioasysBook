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


type ModelBooks = []

export async function Fetch_Book(){

    let resp: ModelBooks = [];

    await fetch('https://books.ioasys.com.br/api/v1/books?page=1&amount=25', {
        method: 'GET',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTM0MjQwMjI1NzIsImlhdCI6MTY1MzQyNzYyMjU3Mn0.2LHacaa_uNBIe8WKBupBEU64ju1T5d1yafjbCIYnWU0',
        }
    })
    .then(response => response.json())
    .then((response) => {
        resp = (response.data);
    })
    .catch(err => console.log(err))

    return resp;
}