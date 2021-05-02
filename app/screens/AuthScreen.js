import {Button, Container, Content, Input, Item, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {connect, useSelector} from 'react-redux';
import Styles from '../styles/Styles';

const AuthScreen = props => {
  const user1 = useSelector(({authReducer: {user}}) => user);
  console.log(user1);
  console.log(props.user);
  return (
    <Container style={Styles.screen}>
      <Content centerContent={true}>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input placeholder="Password" />
        </Item>
        <View style={{margin: 10}} />
        <Button block onPress={() => props.navigation.navigate('Second')}>
          <Text>{user1}</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({authReducer: {user}}) => {
  return {user};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, null)(AuthScreen);
