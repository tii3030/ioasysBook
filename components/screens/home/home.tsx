import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Container, Header, Logo, Books, Logout, Container_Search, Input_Search, Button_Search, Img_Search, Button_Preferences, Img_Preferences } from './styles';
import Cards from '../../card_book/card_book';
import { Fetch_Books } from '../../service/get_books';

function Home() {

  useEffect(() => {    
    getBooks();
  }, []);

  async function getBooks() {
    await Fetch_Books().then(value => setData(value.data));
  }

  const [data, setData] = useState([]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>

        <Header>
          <Logo source={require('./logo.png')} resizeMode='contain' />
          <Books>Books</Books>
          <Logout>
            <Image source={require("./logout.png")} style={{alignSelf: 'center', height: 16, width: 16}}></Image>  
          </Logout>               
        </Header>

        <Container_Search>
          <View>
              <Input_Search
                autoCapitalize='none'
                autoCorrect={false}
                // onChangeText={(password) => setLogin({...login, password: password})}
                // value={login.password}
                accessibilityLabel={ 'Pesquisa' }
                returnKeyType="done"
                placeholder="Pesquise um livro"
                placeholderTextColor="rgba(51, 51, 51, 0.2)" 
              />
              <Button_Search>
                <Img_Search source={require("./search.png")} />
              </Button_Search>
          </View>

            <Button_Preferences>
              <Img_Preferences source={require("./preferences.png")} /> 
            </Button_Preferences>

        </Container_Search>


        {data?.map((value, index) => {
          return (
            <Cards key={index} book={value}/>
          );
        })}


      </Container>
    </ScrollView>
  );
}

export default Home;
