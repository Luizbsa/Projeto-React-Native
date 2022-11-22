import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function AnimesListaTela(){
  return(
    <View>
      <Text>Meus Animesa</Text>
      </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Apps</Text>
      <AnimesListaTela></AnimesListaTela>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tituloTela: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerAnimesLista: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tituloAnimesLista: {
    fontSize: 20,
  }
});
