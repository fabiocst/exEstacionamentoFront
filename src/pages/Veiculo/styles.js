import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '800px',
        overflow: 'auto'
    },
    text: {
        marginTop: 25,
        marginBottom: 15,
        fontSize: 25,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        width: "90%",
        padding: 10,
        fontSize: 18,
    },
    areaBtn: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-around",
    },
    botao: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 5,
    },
    botaoText: {
        fontSize: 22,
        color: "#FFF",
    },
});
export default styles;