import React, { useState } from "react";
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useAppDispatch } from '../../redux/hooks_store/hooks'
import images from "../../assets/images"; 
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp } from '../routes/typesScreen';
import { LoginModel } from "../../models/models";
import { Container, Card, Header, Books, Logo, Input, Label, Button, Text} from './styles';
import { FetchLogin, FetchBooks } from "../../redux/actions/actions";

function Login() {

    const [login, setLogin] = useState<LoginModel>({
        email: '',
        password: '',
    });

    const navigation = useNavigation<HomeScreenProp>();
    const dispatch = useAppDispatch();

    async function submit() {
        try{
            await dispatch(FetchLogin(login))
            await dispatch(FetchBooks());
            navigation.navigate('Home');
        } catch(error) {
            console.log("Error")
        }
    }

    return (
        <Container>
            <ImageBackground style={styles.Background} source={images.background}>
                <Card>
                    <Header>
                        <Logo source={images.logo_login} resizeMode='contain' />
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
            </ImageBackground>    
        </Container>
    );
}

export default Login;

const styles = StyleSheet.create ({
    Background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        alignSelf: 'stretch',
    }
})