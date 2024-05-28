import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native';
import axios from 'axios';
import styles from './styles.js';
export default ({ route, navigation }) => {
    // Variável que recebe os dados da Lista e preeche os campos do form
    const [proprietarios, setProprietarios] = useState(route.params ?
        route.params : {})
    //Função que Altera os dados utilizando a API
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await
                axios.put(`http://localhost:8081/proprietario/${proprietarios.id_proprietario}`, proprietarios);
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
                    onChangeText={id_proprietario => setProprietarios({
                        ...proprietarios, id_proprietario
                    })}
                    value={proprietarios.id_proprietario}
                />
                <Text style={styles.text}>Digite seu nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={nome => setProprietarios({
                        ...proprietarios, nome
                    })}
                    value={proprietarios.nome}
                />
                <Text style={styles.text}>Digite seu CPF</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={cpf => setProprietarios({
                        ...proprietarios, cpf
                    })}
                    value={proprietarios.cpf}
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