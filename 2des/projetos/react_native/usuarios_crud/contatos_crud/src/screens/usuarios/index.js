import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import mocks from '../../../mocks/usuarios';
import ItemList from '../../components/item';

export default function Usuarios({ navigation, route }) {

  const [listaLocal, setListaLocal] = useState(mocks);

  function abrirDetalhes(usuario, indice) {
    usuario.indice = indice;
    navigation.navigate('Detalhes', { usuario })
  }

  function idAutoIncrement(usuario) {
    //Gera um novo id adicionando 1 ao ultimo id
    usuario.id = listaLocal[listaLocal.length - 1].id + 1;
    return usuario;
  }

  useEffect(() => {
    //Ao carregar esta tela principal verifica o efeito no route.params
    //Caso não hara nenhuma alteração nada acontece, senão executa este bloco
    const users = listaLocal;
    if (route.params != undefined) {
      if (route.params.usuario.indice != undefined) {
        if (route.params.usuario.del) {
          //Se vier marcado com del == true e possuir indice remove da lista
          users.splice(route.params.usuario.indice, 1);
          setListaLocal([...users]);
        } else {
          //Senão apenas altera
          users[route.params.usuario.indice] = route.params.usuario;
          setListaLocal([...users]);
        }
      } else {
        //Se não possuir indice e não estiver marcado com del=true: é um novo usuário
        if (!route.params.usuario.del) {
          users.push(idAutoIncrement(route.params.usuario))
          setListaLocal([...users]);
        }
      }
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={listaLocal}
        style={styles.list}
        renderItem={({ item, index }) => <TouchableOpacity onPress={() => abrirDetalhes(item, index)}>
          {ItemList(item)}
        </TouchableOpacity>}
      >
      </FlatList>
    </View>
  );
}