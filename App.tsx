import { StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import Catalogos from './components/catalogo';


const catalogos=[
  
  {id:"1", nome:"Counter-Strike 2", plataforma:"PC", preco:"Grátis"},
  {id:"2", nome:"Red Dead Redemption 2", plataforma:"PC", preco:"R$ 74,97"},
  {id:"3", nome:"The Last of Us™ Part I", plataforma:"PC", preco:"R$ 124,95"},
  {id:"4", nome:"Diablo® IV", plataforma:"PC", preco:"R$ 126,44"},
  {id:"5", nome:"R.E.P.O.", plataforma:"PC", preco:"R$ 32,99"},
  {id:"6", nome:"The Elder Scrolls V: Skyrim Special Edition", plataforma:"PC", preco:"R$ 37,25"},
  {id:"7", nome:"DayZ", plataforma:"PC", preco:"R$ 94,99"},
  {id:"8", nome:"Call of Duty®: Warzone™", plataforma:"PC", preco:"Grátis"},
  {id:"9", nome:"Tom Clancy’s The Division® 2", plataforma:"PC", preco:"R$ 14,99"},
  {id:"10", nome:"Clair Obscur: Expedition 33", plataforma:"PC", preco:"R$ 199,00"},
  {id:"11", nome:"PUBG: BATTLEGROUNDS", plataforma:"PC", preco:"Grátis"},
  {id:"12", nome:"ELDEN RING", plataforma:"PC", preco:"R$ 197,90"},
] 

export default function App() {
  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.titulo}>Catalogo de Jogos</Text>
        </View>

        <View style={styles.lista}>
              <FlatList
                data={catalogos}
                renderItem={({item}) => <Catalogos preco={item.preco} nome={item.nome} plataforma={item.plataforma} />}
                keyExtractor={item => item.id}
              />
        </View> 

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight:'bold',
    color: 'white',
    },

  lista: {
    paddingBottom:20,
    height: '80%',
    borderRadius:'10px',
  },
});



// #1C1C1C — Cinza escuro (quase preto)

// #adb0b0 — Cinza médio

// #ecdddd — Cinza bem claro, quase branco

// #f74e4e — Vermelho vibrante

// #e16a6b — Vermelho escuro puxando levemente para o carmesim