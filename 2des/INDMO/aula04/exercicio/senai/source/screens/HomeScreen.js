import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Cursos from '../mocks/CursosMock';
import logo from '../../assets/SENAI_São_Paulo_logo 1.png';
import hamb from '../../assets/1024px-Hamburger_icon_white 1.png';
import cursos1 from '../../assets/cursos 1 (2).png';
import cursos2 from '../../assets/cursos 2.png';
import cursos3 from '../../assets/cursos 3.png';
import rodape from '../../assets/rodape.png';

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} ></Image>
                <Image style={styles.hamb} source={hamb} ></Image>
            </View>

            <View style={styles.texto}>
                <Text style={styles.text}>(Senai) é uma instituição brasileira que tem como objetivo promover a educação profissional e tecnológica, capacitando profissionais para atuar nas indústrias e contribuindo para o desenvolvimento econômico do país.</Text>
            </View>

            <View style={styles.list}>
                <Text style={styles.textList}>Lista de Cursos Senai</Text>

                <TouchableOpacity  onPress={() => {navigation.navigate("CursosScreen",{categoria:'Técnico'})}}>
                    <Image style={styles.curso} source={cursos1}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate("CursosScreen",{categoria:'CAI'})}}>
                    <Image style={styles.curso} source={cursos2}></Image>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {navigation.navigate("CursosScreen",{categoria:'FIC'})}}>
                   <Image style={styles.curso} source={cursos3}></Image>
                </TouchableOpacity>
               
            </View>

            <Image style={styles.rodape} source={rodape}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100vw',
        height: '50px',
        backgroundColor: '#ff0000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px'
    },
    logo:{
        width: '90px',
        height: '20px'
    },
    hamb: {
        width: '30px',
        height: '30px'
    },
    texto:{
        width: '100vw',
        height: '120px',
        padding: '30px',
        alignItems: 'center'
    },
    text: {
        height: '80px',
        fontSize: '12px',
        
    },
    list:{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'

    },
    textList:{
        fontSize: '20px',
        color: '#ff0000'
    },
    curso: {
        width: '350px',
        height: '120px'
    },
    rodape:{
        width: '100vw',
        height: '200px',
        position: 'fixed',
        bottom: '0px'
    }
});