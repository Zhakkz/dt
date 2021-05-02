import {Button, Container, Content, Text} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import Styles from '../styles/Styles';

export default function MainScreen({navigation}) {
  const user = useSelector(({authReducer}) => authReducer.user);

  return (
    <Container style={Styles.screen}>
      <Content centerContent>
        <Text>{user}</Text>
        <Button block onPress={() => navigation.navigate('Home')}>
          <Text>go back</Text>
        </Button>
      </Content>
    </Container>
  );
}
