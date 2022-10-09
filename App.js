import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicio from './componentes/TelaInicio';
import TelaSobre from './componentes/SobrePiloto';
import TelaVitorias from './componentes/telaVitorias';
import { FontAwesome, Feather, Entypo } from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#eecb01',
        },

        headerTitleStyle: {
          color: '#000',
          fontWeight: 'bold',
        },

        tabBarStyle: {
          backgroundColor: '#eecb01',
        },

        tabBarActiveBackgroundColor: '#fff',

        tabBarActiveTintColor: '#ba171',

        tabBarInactiveTintColor: '#000',
      }}>
        <Tab.Screen name="inicio" component={TelaInicio} options={{
        tabBarIcon: ({color})=>(
          <FontAwesome name="home" size={20} color={color} />
        ),

        
        }}/>
        <Tab.Screen name="Sobre" component={TelaSobre}
        options={{
          tabBarIcon: ({color})=>(
            <Feather name="help-circle" size={20} color={color} />
          ),
        }}
        />
        <Tab.Screen name="Vitórias" component={TelaVitorias}
        options={{
          tabBarIcon: ({color})=> (
            <Entypo name="trophy" size={20} color={color} />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

