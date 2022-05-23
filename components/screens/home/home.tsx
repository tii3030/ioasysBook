import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
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
import images from "../../../assets/images";

function Home() {

  // TOKEN GET REQUEST HEADER AUTHORIZATION
  const token = useAppSelector((state) => state.userToken.value)

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {    
    getBooks('');
  }, []);

  async function getBooks(category?: string) {
    await Fetch_Books(token, category).then(value => setData(value.data));
  }

  const [category, setCategory] = useState('');

  function filter() {
    setModalVisible(!modalVisible);
    getBooks(category);
  }

  type State = {
    biographies: boolean,
    manuscripts: boolean,
    poetry: boolean,
    humor: boolean,
    games: boolean,
    scienceFiction: boolean,
  }

  const initial_value: State = {
    biographies: false,
    manuscripts: false,
    poetry: false,
    humor: false,
    games: false,
    scienceFiction: false,
  }

  const [stateBtn, setStateBtn] = useState<State>({
    biographies: false,
    manuscripts: false,
    poetry: false,
    humor: false,
    games: false,
    scienceFiction: false
  });

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
                    <Img_Close source={images.close_icon} />
                  </Close>  
                </TouchableOpacity>   
              </Header_Modal>

              <Text_Select>Selecione a categoria</Text_Select>
              
              <Button_Container>
                <TouchableOpacity onPress={()=> {setStateBtn({...initial_value, biographies: !stateBtn.biographies}), setCategory('biographies')}}><Button_Category selected={stateBtn.biographies}><Text_Category selected={stateBtn.biographies}>Biografias</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...initial_value, manuscripts: !stateBtn.manuscripts}), setCategory('manuscripts')}}><Button_Category selected={stateBtn.manuscripts}><Text_Category selected={stateBtn.manuscripts}>Manuscritos</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...initial_value, poetry: !stateBtn.poetry}), setCategory('poetry')}}><Button_Category selected={stateBtn.poetry}><Text_Category selected={stateBtn.poetry}>Poesia</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...initial_value, humor: !stateBtn.humor}), setCategory('humor')}}><Button_Category selected={stateBtn.humor}><Text_Category selected={stateBtn.humor}>Humor</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...initial_value, games: !stateBtn.games}), setCategory('games')}}><Button_Category selected={stateBtn.games}><Text_Category selected={stateBtn.games}>Games</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...initial_value, scienceFiction: !stateBtn.scienceFiction}), setCategory('scienceFiction')}}><Button_Category selected={stateBtn.scienceFiction}><Text_Category selected={stateBtn.scienceFiction}>Ficção Científica</Text_Category></Button_Category></TouchableOpacity>
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
          <Logo source={images.logo} resizeMode='contain' />
          <Books>Books</Books>

          <TouchableOpacity>
            <Logout>
              <Image source={images.logout_icon} style={{alignSelf: 'center', height: 16, width: 16}}></Image>  
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
                <Img_Search source={images.search_icon}/>
              </Button_Search>
          </View>

            <Button_Preferences onPress={() => setModalVisible(!modalVisible)}>
              <Img_Preferences source={images.preferences_icon} /> 
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
