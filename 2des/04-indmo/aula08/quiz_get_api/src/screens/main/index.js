import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

export default function MainScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: 'Opção 1', value: 'option1' }]);

  //Consumir a API que mostra todos os temas de quizes
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('https://wellifabio.github.io/apiquizes/quizes.json', options)
      .then(resp => resp.json())
      .then(resp => {
        setItems(resp);
        setValue(resp[0].value);
      })
      .catch(err => console.error(err));
  }, []);

  const iniciar = () => {
    navigation.navigate('PerguntasScreen', { value });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>English Quiz</Text>
      <View style={styles.dropdownarea}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <TouchableOpacity onPress={iniciar} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

