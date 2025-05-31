import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contatos from './components/contatos';

const contatos=[
  {id:"1", nome:"Wesllen", telefone:"13 98168-9196"},
  {id:"2", nome:"Jussimar", telefone:"13 98168-9196"},
  {id:"3", nome:"Augusto", telefone:"13 98168-9196"},
  {id:"4", nome:"Dinavey", telefone:"13 98168-9196"},
  {id:"5", nome:"Orelha", telefone:"13 98168-9196"},
  {id:"6", nome:"Jonas", telefone:"13 98168-9196"},
  {id:"7", nome:"Felipin", telefone:"13 98168-9196"},
  {id:"8", nome:"Paulo", telefone:"13 98168-9196"},
  {id:"9", nome:"Jonas", telefone:"13 98168-9196"},
  {id:"10", nome:"Felipin", telefone:"13 98168-9196"},
  {id:"11", nome:"Paulo", telefone:"13 98168-9196"},
] 

export default function App() {
  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.titulo}>Lista Telefonica</Text>
        </View>

        <View style={styles.lista}>
              <FlatList
                data={contatos}
                renderItem={({item}) => <Contatos nome={item.nome} telefone={item.telefone} />}
                keyExtractor={item => item.id}
              />
        </View> 

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight:'bold',
    },

  lista: {
    paddingBottom:20,
    height: '80%',
    borderRadius:'10px',
  },
});
