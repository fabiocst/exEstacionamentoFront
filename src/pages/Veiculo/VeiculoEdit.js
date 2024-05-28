import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native';
import axios from 'axios';
import styles from './styles.js';
export default ({ route, navigation }) => {
    // Variável que recebe os dados da Lista e preeche os campos do form
    const [veiculos, setVeiculos] = useState(route.params ?
        route.params : {})
    //Função que Altera os dados utilizando a API
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await
                axios.put(`http://localhost:8081/veiculo/${veiculos.id_veiculo}`, veiculos);
            //navigation.goBack();
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Identificação</Text>
                <TextInput
                    readOnly
                    style={styles.input}
                    onChangeText={id_veiculo => setVeiculos({
                        ...veiculos, id_veiculo
                    })}
                    value={veiculos.id_veiculo}
                />
                <Text style={styles.text}>Informe a placa</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={placa => setVeiculos({
                        ...veiculos, placa
                    })}
                    value={veiculos.placa}
                />
                <Text style={styles.text}>Informe o ano</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ano => setVeiculos({
                        ...veiculos, ano
                    })}
                    value={veiculos.ano}
                />
                <Pressable
                    style={[styles.botao, {
                        backgroundColor: "#1d75cd"
                    }]}
                    onPress={handleClick} >
                    <Text style={styles.botaoText}>Alterar</Text>
                </Pressable >
            </View>
        </SafeAreaView>
    )
}