import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useState } from "react";
import axios from "axios";
import styles from './styles.js';
export default function ProprietarioForm() {
    //Variáveis state
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    //Função que Cadastra os dados utilizando a API
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/proprietario", {
                nome: nome,
                cpf: cpf
            });
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Digite seu nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={(texto) => setNome(texto)}
                />
                <Text style={styles.text}>Digite seu CPF</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChangeText={(texto) => setCPF(texto)}
                />
            </View>
            <View style={styles.areaBtn}>
                <Pressable
                    style={[styles.botao, {
                        backgroundColor: "#1d75cd"
                    }]}
                    onPress={handleClick} >
                    <Text style={styles.botaoText}>Cadastrar</Text>
                </Pressable >
            </View>
        </SafeAreaView>
    )
};