# Navegando entre telas Screens - Aula03

- Navigator (Telas)
  - Screens
  - Componentes
- REGEX
  - MaskInput
## Navigator (Telas)
Uma das maneiras mais simples de navegar entre telas de um App é utilizando o componente **Navigator**, para isso instalamos as seguintes dependências.

### Iniciar um projeto com Navigator:
- 1. Iniciar com "npx expo init"

- 2. Instalar as **dependencias:**
```cmd
    yarn add @react-navigation/native
    yarn add react-native-safe-area-context
    yarn add react-native-screens
    yarn add react-native-svg
    yarn add @react-navigation/native-stack
    yarn add react-native-mask-input
```

- 3. Criar pastas para as telas e componentes
    - screens
    - components

- 4. Importar no topo do arquivo App.js os arquivos
    ```javascript
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import { NavigationContainer } from '@react-navigation/native';
    ```

- 5. Adicionar no seu return a estrutura Stack.Navigator conforme estrutura a seguir: uma Stack.Screen para cada página do seu projeto
    ```javascript
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginForm}
                    options={{ title: 'Bem vindo ' }} />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ title: 'Dashboard' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
    ```

## REGEX
Padrão para identificar string ou numeros e formatar de acordo com o necessario
```javascript
 <MaskInput
     mask={[/\d/, /\d/, /\d/, '.', /\d/]}
     style={styles.textInput}
     onChangeText={(masked, unmasked) => setPeso(masked)}
     value={peso}
     placeholder="Digite seu peso"
     keyboardType="numeric"
 />
```

## Exemplo:
[my-app](./my-app/)

## EXERCICIO
Desenvolva um App com tela de login que direciona a tela que calcula Empréstimos
- A. Criar a tela de juros
- B. Criar o componente de calculo de juros
- C. Fazer a pagina de login 
- D. Validar o login
- E. Ir para pagina de juros

### OBS: usar maskinput no componente de calculo de juros

#### Formula do juros composto
- M = C * (1 + i)^t
- M = montante
- C = capital
- i = taxa de juros
- t = tempo