import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import cursos from '../mocks/CursosMock';

export default function HomeScreen({navigation, route}){
    const categoria = route.params.categoria
    console.log(categoria)
    return(
        <View>
            <FlatList
                data={cursos}
                renderItem={({ item }) => <TouchableOpacity>
                    <Text>{item.nome}</Text>
                </TouchableOpacity>}
            />
        </View >
    );
};

const styles = StyleSheet.create({

});