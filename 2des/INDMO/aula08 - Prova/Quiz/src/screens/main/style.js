import { StyleSheet } from 'react-native';

const font1 = "https://amaluz.com.br/wp-content/uploads/2022/09/planet-wallpaper.jpg" 

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
        fontSize: 50,
        fontFamily: font1
    }
});

export default styles;