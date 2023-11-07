import React, { useEffect, useState } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function PerguntasScreen({ navigation, route }) {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState({ acertos: 0, erros: 0, perguntas: 0 });

  //Consumir a API do tema escolhido com todas as perguntas e respostas
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('https://wellifabio.github.io/apiquizes/' + route.params.value, options)
      .then(resp => resp.json())
      .then(resp => {
        setPerguntas(resp);
        const dados = { acertos: 0, erros: 0, perguntas: resp.length }
        setResultados(dados);
      })
      .catch(err => console.error(err));
  }, []);

  const proximaPergunta = (iResp) => {
    validaResp(iResp);
    if (indice < perguntas.length - 1) {
      setIndice(indice + 1);
    } else {
      navigation.navigate('ResultadosScreen', { resultados: resultados });
    }
  }

  const validaResp = (iResp) => {
    const result = resultados
    if (perguntas[indice].respostas[iResp].status) {
      result.acertos++;
      setResultados(result);
      alert('Resposta correta');
    } else {
      result.erros++;
      setResultados(result);
      alert('Resposta errada');
    }
  }

  return (
    <>
      {perguntas.length > 0 && (
        <View style={styles.container}>
          <Image style={styles.img} source={{ uri: perguntas[indice].img }} />
          <Text style={styles.title}>{perguntas[indice].pergunta}</Text>
          <FlatList
            data={perguntas[indice].respostas}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => proximaPergunta(index)} >
                <Text style={styles.text}>{item.resposta}</Text>
              </TouchableOpacity>
            )} />
        </View>)}
    </>
  );
}

