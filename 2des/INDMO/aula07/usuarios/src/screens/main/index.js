import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import users from '../../../mocks/users';

const MainScreen = ({ navigation }) => {

    const [tipos, setTipos] = useState([]);

    const handleTipos = (indice) => {
        navigation.navigate('Detalhes', { indice });
    }

    useEffect(() => {
        setTipos(users);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={tipos}
                renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.link} onPress={() => handleTipos(index)}>
                    <Image
                        style={styles.img}
                        source={{ uri: `${item.foto}` }}
                    />
                    <View style={styles.conteudo}>
                    <Text>ID: {item.id}</Text>
                    <Text>Nome: {item.nome}</Text>
                    </View>
                    
        
                </TouchableOpacity>)}
                style={styles.list}
            />

        </View>
    );
};

export default MainScreen;