export function getToken(login: object) : string {

    fetch('https://bi.eletrosom.com/api/authentication/', {
        method: 'POST',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codigo: '123',
            senha: '123'
        })
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response);
    })
    .catch(err => console.log(err))

    return "token";
}