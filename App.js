import { StyleSheet, Text, View, StatusBar, ScrollView, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const animes = [
  {nome:"Shingenki no Kyojin", data: "2013", genero: "Ação", 
  sinopse: "9 titãs e alguns gigantes atacam o planeta Terra em uma era em que o mundo praticamente acabou. Por isso, os seres humanos precisam lutar por sua sobrevivência depois de se tornarem a principal fonte de alimento desses seres monstruosos."},
  {nome:"Bleach", data: "2004", genero: "Aventura", 
  sinopse: "O jovem Ichigo, depois de passar grande parte de sua vida vendo fantasmas, se torna um Shinigami, um ser sobrenatural capaz de controlar a morte. Devido a isso, ele dedica sua vida a proteger os inocentes e ajudar os espíritos torturados até que eles encontrem a paz."},
   {nome:"Naruto", data: "2002", genero: "Ação", 
   sinopse: "O adolescente Naruto Uzumaki e seus amigos Sasuke Uchiha e Sakura Haruno são ninjas que treinam duro para conseguirem almejar a posição de Hokage, o líder mais forte e poderoso dos ninjas da aldeia, onde Naruto cresceu."},
   {nome:"One Piece", data: "1999", genero: "Ação", 
   sinopse: "As aventuras de Monkey D. Luffy e seus amigos, afim de encontrar o maior e mais grandioso tesouro deixado pela pirata Gol D Roger. O nome do tesouro é One Piece e quem encontrá-lo, se tornará o Rei dos Piratas. "},
   {nome:"Boku no Hero", data: "2016", genero: "Aventura", 
   sinopse: "Midoriya Izukué um estudante que, diferente da maioria, nasceu sem super poderes. Com isso, o jovem vive com uma grande frustração por saber que nunca terá a individualidade especial para que possa se aproximar de seu grande ídolo, All Might, um herói conhecido por ser o símbolo da paz."},
   {nome:"Sword Art Online", data: "2011", genero: "Ficção Cientifica", 
   sinopse: "Em um futuro distante, um grupo de amigos usa um equipamento chamado Never Gear, um capacete que estimula os cinco sentidos do usuário, para conseguir entrar em um jogo de MMORPG."},
   {nome:"Dragon Ball", data: "1999", genero: "Porrada", 
   sinopse: "O menino Son Goku vive uma grande aventura em sua jornada pela busca das esferas do dragão. Juntas, elas invocam o dragão Shenlong, capaz de realizar todos os desejos que quiser. Mas para isso, Goku tem de enfrentar grandes inimigos da organização Red Ribbon"},
   {nome:"Another", data: "2012", genero: "Terror", 
   sinopse: "Sakakibara é um jovem que foi transferido para o colégio Yomiyama Norte. Chegando lá, ele descobre que sua turma não é nada normal, pois os alunos, movidos pelo medo, acreditam estar presos em uma maldição que começou há 23 anos, quando um menino morreu. "},
   
  ]

  

  const Stack = createNativeStackNavigator();

  function AnimesLista({ navigation }){
    
    return<>
    {
      animes.map(anime =>{ 
       
        return <View style={styles.containerAnimesLista} key={anime.nome}>
          <TouchableOpacity
          onPress={() => navigation.navigate('detalhesAnimes', {
            Anime:{
              nome: anime.nome,
              data: anime.data,
              sinopse: anime.sinopse,
              genero: anime.genero,
          }}
            
          )}>
          <Text style={styles.tituloAnimesLista}>{anime.nome}</Text>
          </TouchableOpacity>
          <Text style={styles.dataAnimeLista}>{anime.data}</Text>
          <Text style={styles.generoAnimeLista}>{anime.genero}</Text>
         
        </View>
      })
  
    }
    </>
    
  }

function AnimesListaTela({ navigation }){
  return(
    <View>
      
      <Text style={styles.tituloTela}>Lista de Animes</Text>
    <ScrollView>
      <AnimesLista navigation={navigation}></AnimesLista>
      </ScrollView>
      </View>
  )
}

function DetalhesAnime({ navigation, route }){
 const {Anime} = route.params;
  return(

    <View>
      <Text style={styles.tituloTela}>Detalhes do Anime</Text>

      <Text style={{fontSize: 25, paddingVertical: 20,}} >Nome: {Anime.nome}</Text>
      <Text style={{fontSize: 17, paddingTop: 150,}}>Sinopse: {Anime.sinopse}</Text>
      <Text style={{fontSize: 17, paddingTop: 30,}}>Genero: {Anime.genero}</Text>
      <Text style={{fontSize: 17, paddingTop: 30,}}>Data de lançamento: {Anime.data}</Text>
      
      </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="animeLista">
  
  <Stack.Screen name="animeLista" component={AnimesListaTela}
  options={{ title: "Anime Info" }} />
  <Stack.Screen name="detalhesAnimes" component={DetalhesAnime} 
  options={{ title: "Anime Info" }} />
 
  </Stack.Navigator>
  </NavigationContainer>
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
    textAlign: "center",
    borderWidth: 2,
    
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
    color: "red",
    fontWeight: 'bold',
  },
  dataAnimeLista: {
    fontSize: 17,
  },
  generoAnimeLista: {
    fontSize: 20,
  }
});
