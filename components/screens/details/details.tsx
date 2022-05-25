import React, { useEffect, useState } from "react"
import { StyleSheet, View, ScrollView, Image } from 'react-native'
import { Container, Header, Logout, Img_Book, Title, Author, Info } from './styles'
import { TouchableOpacity } from "react-native-gesture-handler"
import images from "../../../assets/images"
import { useAppSelector } from '../../redux/hooks_store/hooks'

function Details({ route, navigation }: any) {

  // BOOK IN STORE
  const book = useAppSelector((state) => state.bookId.book)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>

        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Logout>
            <Image source={images.back} style={{alignSelf: 'center', height: 16, width: 16}}></Image>  
          </Logout>
          </TouchableOpacity> 
        </Header> 

        <Img_Book source={{uri: book.imageUrl || 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg'}}/>
        <Title>{book.title}</Title>
        <Author>{book.title}</Author>

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
            <Info style={{color: "#999999"}}>{book.pageCount} páginas</Info>
            <Info style={{color: "#999999"}}>Editora {book.publisher}</Info>
            <Info style={{color: "#999999"}}>{book.published}</Info>
            <Info style={{color: "#999999"}}>{book.language}</Info>
            <Info style={{color: "#999999"}}>{book.title}</Info>
            <Info style={{color: "#999999"}}>{book.isbn10}</Info>
            <Info style={{color: "#999999"}}>{book.isbn13}</Info>
            <Info style={{color: "#999999"}}>{book.category}</Info>
          </View>
        </View>

        <Info style={{marginBottom: 10}}>RESENHA DA EDITORA</Info>
        <Info style={{color: "#999999", textAlign: 'justify'}}>{book.description}</Info>

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
    
// style={styles.shadow}