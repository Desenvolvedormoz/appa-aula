import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import estilos from './style';
import ReiDaChuva from '../../assets/rei-da-chuva.png';
import ReiDeMonaco from '../../assets/rei-de-monaco.png';
import Corridas from '../../assets/corrida1.jpg';
import Preparacao from '../../assets/preparacao.png';
import Silvastone from '../../assets/silvastone.png';

export default function TelaSobre(){
    return(
        <View style={estilos.containerYes}>
        <View style={estilos.containerFilho}>
            <Text style={estilos.titulo}>Ayrton Senna</Text>
            <Image source={Corridas} style={estilos.image}/>
            <Text style={estilos.texto}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números, ajudam a explicar por que o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o Brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria de automobilismo mundial.</Text>
        </View>
        <ScrollView>
            <View style={estilos.container}>
                <Image source={ReiDaChuva} style={estilos.img}/>
                <View style={estilos.card}>
                <Text style={estilos.subtitulo}>Rei da chuva</Text>
                <Text>Aprimorou a pilotagem no asfalto molhando e mostou ser um piloto de determinação, garra e persistência.</Text>
            </View>
            </View>
            <View style={estilos.container}>
                <Image source={ReiDeMonaco} style={estilos.img}/>
                <View style={estilos.card}>
                <Text style={estilos.subtitulo}>Rei da Mônaco</Text>
                <Text>Conquistou o porto por ser o maior recordista de vitórias, com 6 conquistas.</Text>
            </View>
            </View>
            <View style={estilos.container}>
                <Image source={Silvastone} style={estilos.img}/>
                <View style={estilos.card}>
                <Text style={estilos.subtitulo}>Silvastone</Text>
                <Text>Por seu currículo impressionante em silvastone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
            </View>
            </View>
            <View style={estilos.container}>
                <Image source={Preparacao} style={estilos.img}/>
                <View style={estilos.card}>
                <Text style={estilos.subtitulo}>Preparação</Text>
                <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
            </View>
            </View>
        </ScrollView>
        </View>
    )
}