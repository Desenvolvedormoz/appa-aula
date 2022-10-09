import React from 'react';
import { View,Text, ImageBackground, Image } from 'react-native';
import estilos from './estilos';
import ImgFundo from '../../assets/fundo.jpg';
import FotoCapa from '../../assets/foto-capa.jpg';

export default function TelaInicio(){
    return(
        <ImageBackground style={estilos.img} blurRadius={5} source={ImgFundo}>
        <View style={estilos.container}>
            <Image source={FotoCapa} style={estilos.image}/>
        <View style={estilos.miniContainer}>
            <Text style={estilos.titulo}>Ayrton Senna</Text>
            <Text style={estilos.texto}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
        </View>
        </View>
        </ImageBackground>
    )
}