interface Login {
    email: string,
    password: string,
}

export async function getToken(login: Login) : Promise<any> {

    let resp: string = '';
    
    await fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', {
        method: 'POST',
        mode: 'no-cors', // DISABLE CORS
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: 'desafio@ioasys.com.br',
            password: '12341234'
        })
    })
    .then((response) => {
        resp = (response.headers.get('Authorization') || '');
    })
    // .then(response => response.json())
    // .then((response) => {
    //     console.log(response);
    // })
    .catch(err => console.log(err))

    return resp;
}