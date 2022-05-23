import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Logo,
  Books,
  Logout,
  Container_Search,
  Input_Search,
  Button_Search,
  Img_Search,
  Button_Preferences,
  Img_Preferences,
  Container_Modals,
  Modals,
  Header_Modal,
  Close,
  Img_Close,
  Button_Container,
  Button_Category,
  Text_Select,
  Text_Category,
  Filtrar,
  Text_Filter

} from './styles';
import Cards from '../../card_book/card_book';
import { Fetch_Books } from '../../service/get_books';
import { useAppSelector } from '../../redux/hooks_store/hooks';

function Home() {

  // TOKEN GET REQUEST HEADER AUTHORIZATION
  const token = useAppSelector((state) => state.userKey.value)

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {    
    getBooks('');
  }, []);

  async function getBooks(category?: string) {
    await Fetch_Books(token, category).then(value => setData(value.data));
  }

  const [biographies, setBiographies] = useState(false);
  const [manuscripts, setManuscripts] = useState(false);
  const [poetry, setPoetry] = useState(false);
  const [humor, setHumor] = useState(false);
  const [games, setGames] = useState(false);
  const [scienceFiction, setScienceFiction] = useState(false);

  const [category, setCategory] = useState('');

  function filter() {
    setModalVisible(!modalVisible);
    getBooks(category);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Container_Modals>
            <Modals>

              <Header_Modal>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Close>
                    <Img_Close source={require("./close.png")} />
                  </Close>  
                </TouchableOpacity>   
              </Header_Modal>

              <Text_Select>Selecione a categoria</Text_Select>
              
              <Button_Container>
                <TouchableOpacity onPress={()=> {setBiographies(!biographies), setCategory('biographies')}}><Button_Category style={{backgroundColor: biographies ? "#333333" : "#FFF"}}><Text_Category style={{color: biographies ? "#FFF" : "#333333"}}>Biografias</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setManuscripts(!manuscripts), setCategory('manuscripts')}}><Button_Category style={{backgroundColor: manuscripts ? "#333333" : "#FFF"}}><Text_Category style={{color: manuscripts ? "#FFF" : "#333333"}}>Manuscritos</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setPoetry(!poetry), setCategory('poetry')}}><Button_Category style={{backgroundColor: poetry ? "#333333" : "#FFF"}}><Text_Category style={{color: poetry ? "#FFF" : "#333333"}}>Poesia</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setHumor(!humor), setCategory('humor')}}><Button_Category style={{backgroundColor: humor ? "#333333" : "#FFF"}}><Text_Category style={{color: humor ? "#FFF" : "#333333"}}>Humor</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setGames(!games), setCategory('games')}}><Button_Category style={{backgroundColor: games ? "#333333" : "#FFF"}}><Text_Category style={{color: games ? "#FFF" : "#333333"}}>Games</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setScienceFiction(!scienceFiction), setCategory('scienceFiction')}}><Button_Category style={{backgroundColor: scienceFiction ? "#333333" : "#FFF"}}><Text_Category style={{color: scienceFiction ? "#FFF" : "#333333"}}>Ficção Científica</Text_Category></Button_Category></TouchableOpacity>
              </Button_Container>

              <Text_Select>Selecione o ano</Text_Select>

              <Button_Container>
                <Button_Category><Text_Category>2015</Text_Category></Button_Category>
                <Button_Category><Text_Category>2016</Text_Category></Button_Category>
                <Button_Category><Text_Category>2017</Text_Category></Button_Category>
                <Button_Category><Text_Category>2018</Text_Category></Button_Category>
                <Button_Category><Text_Category>2019</Text_Category></Button_Category>
                <Button_Category><Text_Category>2020</Text_Category></Button_Category>
                <Button_Category><Text_Category>2021</Text_Category></Button_Category>
              </Button_Container>

              <Filtrar onPress={()=> filter()}><Text_Filter>Filtrar</Text_Filter></Filtrar>

            </Modals>
          </Container_Modals>
        </Modal>
      <Container>

        <Header>
          <Logo source={require('./logo.png')} resizeMode='contain' />
          <Books>Books</Books>

          <TouchableOpacity>
            <Logout>
              <Image source={require("./logout.png")} style={{alignSelf: 'center', height: 16, width: 16}}></Image>  
            </Logout>  
          </TouchableOpacity>    
                   
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

            <Button_Preferences onPress={() => setModalVisible(!modalVisible)}>
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
