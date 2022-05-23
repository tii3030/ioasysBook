export async function Fetch_Books() : Promise<any> {

    let resp: {} = {};
    
    await fetch('https://books.ioasys.com.br/api/v1/books?page=1&amount=25', {
        method: 'GET',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTMyOTgzMjQ2MjYsImlhdCI6MTY1MzMwMTkyNDYyNn0.JApv3tP51NdqtSdEcQ-0In6XcX05gOeRw-yZSd8hD4w',
        }
    })
    .then(response => response.json())
    .then((response) => {
        resp = response;
    })
    .catch(err => console.log(err))

    return resp;
}