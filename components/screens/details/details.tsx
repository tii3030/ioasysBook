import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Container, Header, Logout, Img_Book, Title, Author, Info } from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

function Details({ route, navigation }: any) {

  interface Container_Detail{
    id?: string;
    isbn10?: string;
    isbn13?: string;
    imageUrl: string;
    authors?: [];
    title?: string
    category?: string;
    description?: string;
    language?: string;
    pageCount?: string;
    published?: string;
    publisher?: string;
  }

  const [book_detail, setBook_detail] = useState<Container_Detail>({
    id: '',
    isbn10: '',
    isbn13: '',
    imageUrl: '',
    authors: [],
    title: '',
    category: '',
    description: '',
    language: '',
    pageCount: '',
    published: '',
    publisher: '',
  });

  useEffect(() => {   
    setBook_detail(route.params.data); 
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>

        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Logout>
            <Image source={require("./left-arrow.png")} style={{alignSelf: 'center', height: 16, width: 16}}></Image>  
          </Logout>
          </TouchableOpacity> 
        </Header> 

        <Img_Book source={{uri: book_detail.imageUrl}} style={styles.shadow}/>
        <Title>{book_detail.title}</Title>
        <Author>{book_detail.title}</Author>

        <Info style={{marginBottom: 10}}>Informações</Info>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 2}}>
            <Info>Páginas</Info>
            <Info>Editora</Info>
            <Info>Publicação</Info>
            <Info>Idioma</Info>
            <Info>Título Original</Info>
            <Info>ISBN-10</Info>
            <Info>ISBN-13</Info>
            <Info>Categoria</Info>
          </View>

          <View style={{flexDirection: 'column', flex: 2, alignItems: 'flex-end', marginBottom: 17}}>
            <Info style={{color: "#999999"}}>{book_detail.pageCount} páginas</Info>
            <Info style={{color: "#999999"}}>Editora {book_detail.publisher}</Info>
            <Info style={{color: "#999999"}}>{book_detail.published}</Info>
            <Info style={{color: "#999999"}}>{book_detail.language}</Info>
            <Info style={{color: "#999999"}}>{book_detail.title}</Info>
            <Info style={{color: "#999999"}}>{book_detail.isbn10}</Info>
            <Info style={{color: "#999999"}}>{book_detail.isbn13}</Info>
            <Info style={{color: "#999999"}}>{book_detail.category}</Info>
          </View>
        </View>

        <Info style={{marginBottom: 10}}>RESENHA DA EDITORA</Info>
        <Info style={{color: "#999999", textAlign: 'justify'}}>{book_detail.description}</Info>

      </Container>
    </ScrollView>
  );
}

export default Details;

const styles = StyleSheet.create({
  shadow:{
    shadowColor: "rgba(84, 16, 95, 0.13)",
    shadowOffset: {
        width: 0,
        height: 50,
    },
    shadowOpacity: 0.13,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
    
