import { View, Text, SafeAreaView, Keyboard, FlatList } from 'react-native'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Icon, ListItem } from "react-native-elements";
import styles from './styles.js';
export default ProprietarioList => {
    //Variável que recebe os dados da API
    const [proprietarios, setProprietarios] = useState([]);
    //Função que Deleta os dados utilizando a API
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/proprietario/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    //Função que Lista os dados utilizando a API
    const fetchAllProprietarios = async () => {
        try {
            const res = await
                axios.get("http://localhost:8081/proprietario");
            setProprietarios(res.data);
            Keyboard.dismiss();
        } catch (err) {
            console.log(err);
        }
    };
    //Função que inicia a listagem ao abrir o App
    useEffect(() => {
        fetchAllProprietarios();
    }, []);
    //Função para criar os botões Deletar e Editar na Função Lustagem
    function getActions(data) {
        return (
            <>
                <Button
                    onPress={() =>
                        ProprietarioList.navigation.navigate('ProprietarioEdit', data)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => handleDelete(data.id_proprietario)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        );
    }
    //Função que preenche a Lista e Joga no FlatList
    function Listagem({ data }) {
        return (
            <ListItem bottomDivider >
                <ListItem.Content>
                    <ListItem.Title>{data.nome}</ListItem.Title>
                    <ListItem.Subtitle>{data.cpf}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(data)}
            </ListItem>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Listando os Dados</Text>
            </View>
            <FlatList
                keyExtractor={item => item.id}
                data={proprietarios}
                renderItem={({ item }) => (<Listagem data={item} />)}
            />
        </SafeAreaView>
    )
}