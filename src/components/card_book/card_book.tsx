import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Card, Img_Book, Descr, Title, Author, Info } from './styles'
import { useNavigation } from '@react-navigation/native'
import { DetailsScreenProp } from '../../screens/routes/typesScreen'
import { Container_Book } from '../../models/models'
import { FetchBookId } from '../../redux/actions/actions'
import { useAppDispatch } from '../../redux/hooks_store/hooks'

function Cards(props: { book: Container_Book }) {

const [book_data, setBook_data] = useState<Container_Book>({
  authors: [],
  category: '',
  description: '',
  id: '',
  imageUrl: '',
  isbn10: '',
  isbn13: '',
  language: '',
  pageCount: 0,
  published: 0,
  publisher: '',
  title: ''
});

  useEffect(() => {
    setBook_data(props.book);
  }, []);

  const dispatch = useAppDispatch();

  async function getDetailsBook() {
    try{
      await dispatch(FetchBookId(book_data.id || ''))
      navigation.navigate('Details');
    } catch(error) {
      console.log("Error")
    }
  }

  const navigation = useNavigation<DetailsScreenProp>();

  return (
    <TouchableOpacity onPress={() => getDetailsBook()}>
      <Card style={styles.shadow}>
        <Img_Book source={{uri: book_data.imageUrl || 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg'}} />
        
        <Descr>
          <View>
            <Title>{book_data.title}</Title>
            <Author>{book_data.authors}</Author>
          </View>

          <View>
            <Info>{book_data.pageCount} páginas</Info>
            <Info>{book_data.publisher}</Info>
            <Info>Publicado em {book_data.published}</Info>
          </View>
        </Descr>
      
      </Card>
    </TouchableOpacity>
  );
}

export default Cards;

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
    