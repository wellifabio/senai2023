import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';

export default function App() {
  const [distancia, setDistancia] = new useState(0);
  const [corrente, setCorrente] = new useState(0);
  const [resultados, setResultados] = new useState([]);

  const calcular = () => {
    if (distancia > 0 && corrente > 0) {
      let bitola110 = ((2 * (distancia * corrente)) / 294.64).toFixed(2)
      let bitola220 = ((1.73 * (distancia * corrente)) / 510.4).toFixed(2)
      let resultado = 'Distância: ' + distancia + '\nCorrente: ' + corrente + '\nBitola do cabo 110v: ' + bitola110 + 'mm2\nBitola do cabo 220v: ' + bitola220 + 'mm2'
      setResultados([...resultados, resultado])
      setDistancia(0)
      setCorrente(0)
    }
  }

  const excluir = (i) => {
    let lista = resultados
    lista.splice(i, 1)
    setResultados([...lista])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <Text style={styles.titulo}>Cálculo de Bitola</Text>
        <Text style={styles.textos}>Distância em metros:</Text>
        <TextInput
          style={styles.inputs}
          value={distancia}
          onChangeText={(val) => { setDistancia(Number(val)) }}
        />
        <Text style={styles.textos}>Corrente em Amper:
          <Image
            style={styles.amper}
            source={require('./assets/amper.png')}
          />
        </Text>
        <TextInput
          style={styles.inputs}
          value={corrente}
          onChangeText={(val) => { setCorrente(Number(val)) }}
        />
        <Button
          title='Calcular e Adicionar'
          color='#000033'
          onPress={calcular}
        />
        <Image
          style={styles.formula}
          source={require('./assets/formula.jpg')}
        />
      </View>
      <View style={styles.listaContainer}>
        <FlatList
          style={styles.lista}
          data={resultados}
          keyExtractor={(item, index) => index.toString()}
          renderItem={
            ({ item, index }) =>
              <View style={styles.item}>
                <View style={styles.cabecalho} >
                  <Text style={styles.itemCabecalho}>Projeto {index+1}</Text>
                  <Button title=' - ' color='#000033' onPress={() => excluir(index)} />
                </View>
                <Text style={styles.itemText}>{item}</Text>
              </View>
          }
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#330000',
    width: '100%',
  },
  inputsContainer: {
    width: '100%',
    height: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listaContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: '22px',
    color: '#fcc',
    fontWeight: 'bold',
  },
  textos: {
    fontSize: '18px',
    color: '#fee',
    alignItems: 'center',
  },
  inputs: {
    borderBottomColor: '#ccc',
    borderBottomWidth: '1px',
    width: '90%',
    padding: '10px',
    color: '#fcc',
    fontSize: '16px',
  },
  formula: {
    width: '250px',
    height: '180px',
  },
  amper: {
    width: '30px',
    height: '20px',
  },
  lista: {
    marginTop: 20,
    width: '90%',
  },
  item: {
    width: '90%',
    margin: 10,
    padding: 10,
    borderColor: '#fcc',
    borderWidth: '1px',
    backgroundColor: '#fec',
  },
  cabecalho: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  itemCabecalho: {
    width: '100%',
    fontSize: '18px',
    color: '#300',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: '18px',
    color: '#300',
  },
});
