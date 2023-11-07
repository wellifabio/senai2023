# Aula06 - Macros VBA
## Visual Basic for Aplication (Office)

## Exemplo 1
Aqui está um exemplo de código VBA que pega o valor da célula A1, multiplica por dois e apresenta o resultado na célula B1.

- 1. Abra o Excel.

- 2. Pressione a combinação de teclas Alt + F11 para abrir o Editor VBA.

- 3. Na janela do Editor VBA, insira o seguinte código:

```vba
Sub MultiplicarPorDois()
    Dim valorA1 As Double
    Dim resultado As Double
    
    ' Pega o valor da célula A1
    valorA1 = Range("A1").Value
    
    ' Multiplica por dois
    resultado = valorA1 * 2
    
    ' Apresenta o resultado na célula B1
    Range("B1").Value = resultado
End Sub
```
- 4. Feche o Editor VBA.
    - Agora, você pode atribuir essa macro a um botão na sua planilha.

- 5. Volte para a planilha no Excel.

- 6. Certifique-se de que os valores estejam inseridos na célula A1.

- Lembre-se de que esse é um exemplo simples, mas você pode personalizar e expandir a macro de acordo com suas necessidades. Certifique-se de que a guia "Desenvolvedor" esteja habilitada para acessar as ferramentas de macros no Excel.





