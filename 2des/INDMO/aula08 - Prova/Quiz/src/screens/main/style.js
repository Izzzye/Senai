import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13293d'
    },
    image: {
        width: '100%',
        height:'100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    titulo: {
        color: '#fff',
        fontSize: 60,
        paddingBottom: 20
    },
    button: {
        width: 180,
        height: 35,
        backgroundColor: "#318CE7",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "#ffff",
        fontWeight: 700,
        fontSize: 28
    }
});

export default styles;