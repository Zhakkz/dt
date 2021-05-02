import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
const First = () => (
  <Container>
    <Content centerContent={true}>
      <Text style={{textAlign: 'center'}}>First</Text>
    </Content>
  </Container>
);
const Second = () => (
  <Container>
    <Content centerContent={true}>
      <Text style={{textAlign: 'center'}}>Second</Text>
    </Content>
  </Container>
);
const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="First"
        component={First}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="Second"
        component={Second}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="eercast" size={20} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
}
