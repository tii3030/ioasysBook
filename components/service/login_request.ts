export async function getToken(login: object) : Promise<any> {

    let resp: {} = {};
    
    await fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', {
        method: 'POST',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: "desafio@ioasys.com.br",
            password: "12341234"
        })
    })
    .then(response => response.json())
    .then((response) => {
        resp = response;
    })
    .catch(err => console.log(err))

    return resp;
}