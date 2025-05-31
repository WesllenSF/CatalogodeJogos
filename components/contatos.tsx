import {View, Text, StyleSheet} from 'react-native';
interface propsContato{
    nome:string;
    telefone:string;

}

export default function Contatos({nome, telefone}:propsContato){

    return (
        <>
            <View style={styles.cartao}>
                <Text style={styles.nome}>Nome: {nome} </Text>
                <Text style={styles.telefone}>Telefone: {telefone}</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
  cartao: {
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'aqua',
    padding: '2%',
    marginLeft: '5%',
    width: '90%',
 },
  nome: {
    fontSize: 25,
    fontWeight:'bold',
  },
  telefone: {
    fontSize: 18,
  },
});