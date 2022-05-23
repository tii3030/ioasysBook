import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from 'react-native';
import { Container } from './styles';

type PostsProps = {
  data: [];
}

function Details(props: PostsProps) {

  useEffect(() => {    
    console.log(props.data);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Text style={{color: "#000"}}>TEste</Text>
      </Container>
    </ScrollView>
  );
}

export default Details;
