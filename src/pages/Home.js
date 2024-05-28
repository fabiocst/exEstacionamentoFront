import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
const Home = ({ navigation }) => {
    const handleButtonClick = (option) => {
        //implementando a lógica só para o botão de Promoções
        if (option === 'Proprietario') {
            navigation.navigate('ProprietarioList');
        }
        else if (option === 'Veiculo') {
            navigation.navigate('VeiculoList');
        };
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/logo.png')}
                    style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Proprietario')}>
                    <Text style={styles.buttonText}>Proprietario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Veiculo')}>
                    <Text style={styles.buttonText}>Veículo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 0.4,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        margin: '20px',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
export default Home;