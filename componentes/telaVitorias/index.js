import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import estilos from "./estilos";
import Corrida from '../../assets/corrida1.jpg';
import { FontAwesome5 } from '@expo/vector-icons';
import Vitoria1 from '../../assets/vitoria1.jpg';
import Vitoria2 from '../../assets/vitoria2.jpg';
import Vitoria3 from '../../assets/vitoria3.jpg';

export default function TelaVitorias(){
    return(
        <ScrollView>
            <ImageBackground source={Corrida} blurRadius={5} style={estilos.containerImage}>
            <View style={estilos.containerFirst}>
            <Text style={estilos.titulo}>Senna em Números</Text>
            <Text style={estilos.tex}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
            <View style={estilos.container}>
                <FontAwesome5 name="trophy" size={25} color="#ceb105" />
                <Text style={estilos.numero}>161</Text>
                <Text style={estilos.texto}>GPS DISPUTADOS</Text>
            </View>
            <View style={estilos.container}>
              <FontAwesome5 name="trophy" size={25} color="#ceb105" />
              <Text style={estilos.numero}>65</Text>
              <Text style={estilos.texto}>POLE POSITIONS</Text>
            </View>
            <View  style={estilos.container}>
                <FontAwesome5 name="trophy" size={25} color="#ceb105" />
                <Text style={estilos.numero}>41</Text>
                <Text style={estilos.texto}>VITÓRIAS</Text>
            </View>
            <View  style={estilos.container}>
                <FontAwesome5 name="trophy" size={25} color="#ceb105" />
                <Text style={estilos.numero}>3X</Text>
                <Text style={estilos.texto}>CAMPEÃO MUNDIAL</Text>
            </View>
            </View>
            <View style={estilos.containeri}>
                <Text style={estilos.text}>Campeonato mundial - 1988</Text>
                <Image source={Vitoria1} style={estilos.img}/>
            </View>
            <View style={estilos.containeri}>
                <Text style={estilos.text}>Campeonato mundial - 1990</Text>
                <Image source={Vitoria2} style={estilos.img}/>
            </View>
            <View style={estilos.containeri}>
                <Text style={estilos.text}>Campeonato mundial - 1991</Text>
                <Image source={Vitoria3} style={estilos.img}/>
            </View>
            </ImageBackground>
        </ScrollView>
    )
}