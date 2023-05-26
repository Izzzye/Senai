import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
    },

    list: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 0,
        flexDirection: 'column',
        textAlign: 'center',
    },

    img: {
        maxWidth: 100,
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    link:{
        marginTop: 20,
        padding: 10,
        width: "80%",
        flexDirection: "row",
        gap: 20,
        alignSelf: "center",
        borderBottomWidth: 1,
        borderStartColor: "#999",       
    },

    conteudo:{
        marginTop: 20,
        alignItems: "flex-start",
        gap: 10,
    }
});

export default styles;