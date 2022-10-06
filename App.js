import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicio from './componentes/TelaInicio';
import TelaSobre from './componentes/SobrePiloto';
import TelaVitorias from './componentes/telaVitorias';

const Tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="inicio" component={TelaInicio}/>
        <Tab.Screen name="Sobre piloto" component={TelaVitorias}/>
        <Tab.Screen name="Vitórias do piloto" component={TelaSobre}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

