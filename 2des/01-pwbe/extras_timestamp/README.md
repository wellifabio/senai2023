# Cálculos com datas e horas juntas

## MySQL
- Para calcular a diferença entre duas colunas do tipo DATETIME em horas, você pode usar a função TIMESTAMPDIFF() do MySQL. <br> A sintaxe da função TIMESTAMPDIFF() é a seguinte:
```SQL
TIMESTAMPDIFF(unit, datetime1, datetime2)
```
- Onde:
	- **unit** é a unidade de tempo que você deseja usar para calcular a diferença. Nesse caso, como você quer a diferença em horas, você deve usar **HOUR**.
datetime1 e datetime2 são as duas colunas do tipo DATETIME que você deseja calcular a diferença.<br>
	- Assim, para calcular a diferença em horas entre duas colunas do tipo DATETIME chamadas **data_inicio** e **data_fim** em uma tabela chamada minha_tabela, <br> você pode usar a seguinte consulta SQL:
```SQL
SELECT TIMESTAMPDIFF(HOUR, data_inicio, data_fim) AS horas
FROM minha_tabela;
```
- Essa consulta irá retornar a diferença em horas entre as colunas **data_inici**o e **data_fim** para cada linha da tabela minha_tabela, com o resultado sendo nomeado como horas.

##JavaScript
- Em JavaScript, você pode calcular a diferença entre duas datas usando o objeto Date e alguns cálculos matemáticos.

- Aqui está um exemplo de como calcular a diferença em horas entre duas datas em JavaScript:
```javascript
const data_inicio = new Date('2023-03-08 10:00:00');
const data_fim = new Date('2023-03-09 14:30:00');

const diff = Math.abs(data_fim - data_inicio); // Diferença em milissegundos
const horas = Math.floor(diff / 1000 / 60 / 60); // Diferença em horas

console.log(horas);
```
- Nesse exemplo, as datas de início e fim são criadas usando o construtor **Date()** e são armazenadas nas variáveis data_inicio e data_fim, respectivamente. A diferença entre essas datas é calculada subtraindo a data de início da data de fim e usando o método **Math.abs()** para obter o valor absoluto da diferença (em milissegundos).
- Em seguida, a diferença em horas é calculada dividindo a diferença em milissegundos pelo número de milissegundos em um segundo (1000), pelo número de segundos em um minuto (60), pelo número de minutos em uma hora (60) e usando o método **Math.floor()** para arredondar para baixo para o número inteiro mais próximo.

- Finalmente, o número de horas é impresso no console usando o método console.log().

- Observe que neste exemplo, as datas são criadas usando a string no formato **'YYYY-MM-DD HH:mm:ss'**. Se as datas em seu banco de dados estiverem em outro formato, você pode precisar convertê-las para esse formato antes de criar os objetos **Date()**.