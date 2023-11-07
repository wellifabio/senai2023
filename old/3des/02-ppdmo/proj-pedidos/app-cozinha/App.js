import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      console.log("Atualizar Lista")
      listarPedidos();
    }, 1500);
  }, [])

  const listarPedidos = () => {
    fetch('http://10.87.207.3:3000/pedidos/readCozinha')
      .then(response => { return response.json() })
      .then(data => {
        setPedidos(data);
      })
  }

  const enviarPedido = (id_pedido) => {
    fetch('http://10.87.207.3:3000/pedidos/toEntrega/' + id_pedido, 
    {
      "method":"PUT"
    })
    .then(response => { 
        if(response.status === 200) {
          console.log("Pedido Enviado");
          listarPedidos();
        }else {
          console.log(response.status);
        }
     })
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Cozinha</Text>
      </View>
      <View>
        <Text>Em Execução</Text>
        <View>
          <ScrollView>
            {
              pedidos.map((pedido, index) => {
                return (
                  <View key={index} >
                    <Text>id : { pedido.id_pedido }</Text>
                    <Text>Cliente : { pedido.cliente }</Text>
                    <Text>Produto : { pedido.Produto }</Text>
                    <Text>Endereço : { pedido.endereco }</Text>
                    <Text>Data : { pedido.data }</Text>
                    <Text>Horario : { pedido.hora_pedido }</Text>
                    <TouchableOpacity onPress={() => { enviarPedido(pedido.id_pedido) }}>
                      <Text>Enviar Entrega</Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            }
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
