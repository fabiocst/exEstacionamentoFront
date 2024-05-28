import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useState } from "react";
import axios from "axios";
import styles from './styles.js';
export default function VeiculoForm() {
    //Variáveis state
    const [placa, setPlaca] = useState("");
    const [ano, setAno] = useState("");
    const [mensalidade, setMensalidade]=useState("");
    //Função que Cadastra os dados utilizando a API
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/veiculo", {
                placa: placa,
                ano: ano,
                mensalidade: mensalidade
            });
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Informe a placa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Apenas letras e numeros"
                    value={placa}
                    onChangeText={(texto) => setPlaca(texto)}
                />
                <Text style={styles.text}>Informe o ano</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe o ano"
                    value={ano}
                    onChangeText={(texto) => setAno(texto)}
                />
                <Text style={styles.text}>Informe a mensalidade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Apenas numeros"
                    value={mensalidade}
                    onChangeText={(texto) => setMensalidade(texto)}
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