import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Img_Book, Descr, Title, Author, Info } from './styles';
import { DetailsBook } from "../service/detailsBook";
import { useNavigation } from '@react-navigation/native';
import { DetailsScreenProp } from '../screens/routes/typesScreen';
import { useAppSelector } from '../redux/hooks_store/hooks';

type PostsProps = {
  book: Container_Book;
}

interface Container_Book{
  id: string;
  isbn10?: string;
  isbn13?: string;
  imageUrl?: string;
  authors?: [];
  title?: string
  category?: string;
  description?: string;
  language?: string;
  pageCount?: string;
  published?: string;
  publisher?: string;
}

function Cards({book}: PostsProps) {

  // TOKEN GET REQUEST HEADER AUTHORIZATION
  const token = useAppSelector((state) => state.userKey.value)

  const [book_data, setBook_data] = useState<Container_Book>({
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
    setBook_data(book);
  }, []);

  async function getDetailsBook() {
    await DetailsBook(book_data.id, token).then(value => navigation.navigate('Details', { data: value }));
  }

  const navigation = useNavigation<DetailsScreenProp>();

  return (
    <TouchableOpacity onPress={() => getDetailsBook()}>
      <Card style={styles.shadow}>
        <Img_Book source={{uri: book.imageUrl}} />
        
        <Descr>
          <View>
            <Title>{book.title}</Title>
            <Author>{book.authors[0]}</Author>
          </View>

          <View>
            <Info>{book.pageCount} páginas</Info>
            <Info>{book.publisher}</Info>
            <Info>Publicado em {book.published}</Info>
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
    