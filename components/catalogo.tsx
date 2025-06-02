import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface propsCatalogo{
    nome:string;
    plataforma:string;
    preco: string;
}

export default function Catalogos({nome, plataforma, preco}:propsCatalogo){

    return (
        <>
            <View style={styles.cartao}>
                <Text style={styles.nome}>Nome: {nome} </Text>
                <Text style={styles.plataforma}>Plataforma: {plataforma}</Text>
                <Text style={styles.preco}>Preço: {preco}</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
  cartao: {
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#f74e4e',
    padding: '2%',
    marginLeft: '5%',
    width: '90%',
 },
  nome: {
    fontSize: 25,
    fontWeight:'bold',
  },
  plataforma: {
    fontSize: 18,
  },
  preco: {
    fontSize: 25,
    fontWeight:'bold',
  }
});