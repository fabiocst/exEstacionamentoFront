import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProprietarioForm from './src/pages/Proprietario/ProprietarioForm';
import ProprietarioList from './src/pages/Proprietario/ProprietarioList';
import ProprietarioEdit from './src/pages/Proprietario/ProprietarioEdit';

import VeiculoList from './src/pages/Veiculo/VeiculoList';
import VeiculoEdit from './src/pages/Veiculo/VeiculoEdit';
import VeiculoForm from './src/pages/Veiculo/VeiculoForm';
import Home from './src/pages/Home'
import { Icon, Button } from 'react-native-elements';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="ProprietarioList"
          component={ProprietarioList}
          options={({ navigation }) => {
            return {
              title: "Lista de Proprietários",
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("ProprietarioForm")}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              )
            }
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Menu de Opções'
          }}
        />
        <Stack.Screen
          name="ProprietarioForm"
          component={ProprietarioForm}
          options={{
            title: 'Formulário de Proprietários'
          }}
        />
        <Stack.Screen
          name="ProprietarioEdit"
          component={ProprietarioEdit}
          options={{
            title: 'Formulário de Edição'
          }}
        />
        <Stack.Screen
          name="VeiculoList"
          component={VeiculoList}
          options={({ navigation }) => {
            return {
              title: "Lista de Veiculos",
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("VeiculosForm")}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              )
            }
          }}
        />
        <Stack.Screen
          name="VeiculoForm"
          component={VeiculoForm}
          options={{
            title: 'Formulário de Veículos'
          }}
        />
        <Stack.Screen
          name="VeiculoEdit"
          component={VeiculoEdit}
          options={{
            title: 'Formulário de Edição'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
export default App;