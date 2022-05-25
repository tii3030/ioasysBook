import { UserModel, LoginModel } from '../models/models'

export async function getApiLogin(login: LoginModel) {

    let resp: UserModel = {
        Authorization: '',
        User: {
            birthdate: '',
            email: '',
            gender: '',
            id: '',
            name: ''
        }
    };

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

    .then(response => response.json().then(User => ({
        Authorization: response.headers.get('Authorization') || '',
        User
    })))
    .then(result => {
        resp = result
    })

    .catch(err => console.log(err))

    return resp;
}