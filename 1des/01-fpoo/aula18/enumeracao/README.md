# Enumeração
Em JavaScript, não há um tipo de dados específico chamado "enumeração" como em algumas outras linguagens, mas você pode criar algo semelhante usando objetos ou classes. Por exemplo:

```js
// Usando objetos para simular enumeração

const DiasDaSemana = {
  DOMINGO: 'Domingo',
  SEGUNDA: 'Segunda-feira',
  TERCA: 'Terça-feira',
  QUARTA: 'Quarta-feira',
  QUINTA: 'Quinta-feira',
  SEXTA: 'Sexta-feira',
  SABADO: 'Sábado'
};

console.log(DiasDaSemana.SEGUNDA); // Saída: Segunda-feira
```

```js
// Usando uma classe para simular enumeração

class DiasDaSemana {
  static DOMINGO = 'Domingo';
  static SEGUNDA = 'Segunda-feira';
  static TERCA = 'Terça-feira';
  static QUARTA = 'Quarta-feira';
  static QUINTA = 'Quinta-feira';
  static SEXTA = 'Sexta-feira';
  static SABADO = 'Sábado';
}

console.log(DiasDaSemana.QUARTA); // Saída: Quarta-feira
```
Essas abordagens permitem que você crie estruturas que se comportam como enumerações em outras linguagens, embora não sejam exatamente iguais em termos de funcionalidade nativa.