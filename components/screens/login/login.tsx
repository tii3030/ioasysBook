import React, { useState } from "react";
import { View } from 'react-native';
import { Container, Background, Card, Header, Books, Logo, Input, Label, Button, Text } from './styles'
import { getToken } from '../../service/login_request';
import store from "../../redux/store/store";
import { add } from "../../redux/reducers/addUser";
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProp} from '../routes/typesScreen';

function Login() {

    interface Login {
        email: string,
        password: string,
    }

    const [login, setLogin] = useState<Login>({
        email: '',
        password: '',
    });

    const navigation = useNavigation<HomeScreenProp>();

    async function submit() {
        let value = await getToken(login);
        store.dispatch(add(login));
        console.log(value);
        navigation.navigate('Home');
    }



    return (
        <Container>
            <Background source={require('./background.jpg')}>
                <Card>
                    <Header>
                        <Logo source={require('./logo.png')} resizeMode='contain' />
                        <Books>Books</Books>                    
                    </Header>

                    <View>
                        <Label>Email</Label>
                        <Input 
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(email) => setLogin({...login, email: email})}
                            value={(login.email)}
                            accessibilityLabel={ 'Email' }
                            autoCompleteType="email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            style={{marginBottom: 16}}
                        />
                    </View>

                    <View>
                        <Label>Senha</Label>
                        <Input
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry
                            onChangeText={(password) => setLogin({...login, password: password})}
                            value={login.password}
                            accessibilityLabel={ 'Senha' }
                            autoCompleteType="password"
                            returnKeyType="done"
                        />
                        <Button
                            accessibilityLabel={ "Entrar" }
                            onPress={() => submit()}
                        >
                            <Text>Entrar</Text>
                        </Button>
                    </View>
                </Card>
        </Background>    
    </Container>
  );
}

export default Login;