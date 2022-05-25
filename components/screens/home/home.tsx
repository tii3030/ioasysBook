import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Logo, Books, Logout, Container_Search, Input_Search, Button_Search, Img_Search, Button_Preferences, Img_Preferences, Container_Modals, Modals, Header_Modal, Close, Img_Close, Button_Container, Button_Category, Text_Select, Text_Category, Filtrar, Text_Filter } from './styles';
import Cards from '../../card_book/card_book';
import { useAppSelector } from '../../redux/hooks_store/hooks';
import { useAppDispatch } from '../../redux/hooks_store/hooks';
import images from "../../../assets/images";
import { ModelCategory, ModelYear, Container_Book } from '../../models/models'
import { FetchBooks } from "../../redux/actions/actions";

function Home() {

  const books = useAppSelector((state) => state.books)

  useEffect(() => {    
    setLoading(false)
  }, [books]);
  
  const init_cat: ModelCategory = {
    biographies: false,
    manuscripts: false,
    poetry: false,
    humor: false,
    games: false,
    scienceFiction: false,
  }

  const [stateBtn, setStateBtn] = useState<ModelCategory>({
    biographies: false,
    manuscripts: false,
    poetry: false,
    humor: false,
    games: false,
    scienceFiction: false,
  });

  const [stateYear, setStateYear] = useState<ModelYear>({
    y2015: false,
    y2016: false,
    y2017: false,
    y2018: false,
    y2019: false,
    y2020: false,
    y2021: false
  });

  const [isLoading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState('');

  const [year, setYear] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  async function filter() {
    setLoading(true)
    setModalVisible(!modalVisible);

    if(category != '') {
      try{
        await dispatch(FetchBooks(category));
      } catch(error) {
        console.log("Error")
      }
    } else {
      try{
        await dispatch(FetchBooks());
      } catch(error) {
        console.log("Error")
      }
    }
  }

  function changeYear(value: number) {

    let arr: number[] = year;

    if (arr.indexOf(value) >= 0) {
      arr.splice(arr.indexOf(value), 1);
    } else {
      arr.push(value);
    }

    setYear(arr)
  }

  function BooksYear() {
    // console.log(books.books)
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
                    <Img_Close source={images.close_icon} />
                  </Close>  
                </TouchableOpacity>   
              </Header_Modal>

              <Text_Select>Selecione a categoria</Text_Select>
              
              <Button_Container>
                <TouchableOpacity onPress={()=> {setStateBtn({...init_cat, biographies: !stateBtn.biographies}), !stateBtn.biographies ? setCategory('biographies') : setCategory('')}}><Button_Category selected={stateBtn.biographies}><Text_Category selected={stateBtn.biographies}>Biografias</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...init_cat, manuscripts: !stateBtn.manuscripts}), !stateBtn.manuscripts ? setCategory('manuscripts') : setCategory('')}}><Button_Category selected={stateBtn.manuscripts}><Text_Category selected={stateBtn.manuscripts}>Manuscritos</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...init_cat, poetry: !stateBtn.poetry}), !stateBtn.poetry ? setCategory('poetry') : setCategory('')}}><Button_Category selected={stateBtn.poetry}><Text_Category selected={stateBtn.poetry}>Poesia</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...init_cat, humor: !stateBtn.humor}), !stateBtn.humor ? setCategory('humor') : setCategory('')}}><Button_Category selected={stateBtn.humor}><Text_Category selected={stateBtn.humor}>Humor</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...init_cat, games: !stateBtn.games}), !stateBtn.games ? setCategory('games') : setCategory('')}}><Button_Category selected={stateBtn.games}><Text_Category selected={stateBtn.games}>Games</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateBtn({...init_cat, scienceFiction: !stateBtn.scienceFiction}), !stateBtn.scienceFiction ? setCategory('scienceFiction') : setCategory('')}}><Button_Category selected={stateBtn.scienceFiction}><Text_Category selected={stateBtn.scienceFiction}>Ficção Científica</Text_Category></Button_Category></TouchableOpacity>
              </Button_Container>

              <Text_Select>Selecione o ano</Text_Select>

              <Button_Container>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2015: !stateYear.y2015}), changeYear(2015)}}><Button_Category selected={stateYear.y2015}><Text_Category selected={stateYear.y2015}>2015</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2016: !stateYear.y2016}), changeYear(2016)}}><Button_Category selected={stateYear.y2016}><Text_Category selected={stateYear.y2016}>2016</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2017: !stateYear.y2017}), changeYear(2017)}}><Button_Category selected={stateYear.y2017}><Text_Category selected={stateYear.y2017}>2017</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2018: !stateYear.y2018}), changeYear(2018)}}><Button_Category selected={stateYear.y2018}><Text_Category selected={stateYear.y2018}>2018</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2019: !stateYear.y2019}), changeYear(2019)}}><Button_Category selected={stateYear.y2019}><Text_Category selected={stateYear.y2019}>2019</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2020: !stateYear.y2020}), changeYear(2020)}}><Button_Category selected={stateYear.y2020}><Text_Category selected={stateYear.y2020}>2020</Text_Category></Button_Category></TouchableOpacity>
                <TouchableOpacity onPress={()=> {setStateYear({...stateYear, y2021: !stateYear.y2021}), changeYear(2021)}}><Button_Category selected={stateYear.y2021}><Text_Category selected={stateYear.y2021}>2021</Text_Category></Button_Category></TouchableOpacity>
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

        {
          !isLoading ?
          books.books?.map((value: Container_Book, index) => {
            return (
              <Cards key={index} book={value}/>
            );
          })
          : <ActivityIndicator size="large" />
        }

      </Container>
    </ScrollView>
  );
}

export default Home;
