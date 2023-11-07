# Comsumir API com AXIOS

Abaixo está um exemplo simples de como realizar operações CRUD (Create, Read, Update e Delete) usando o Axios para consumir uma API REST:

- script.js
```javascript
import axios from 'axios';

// URL base da API
const API_URL = 'http://exemplo.com/api/';

// Função para criar um novo objeto
export const createObject = async (data) => {
  try {
    const response = await axios.post(API_URL + 'objetos', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Função para buscar um objeto específico
export const getObject = async (objectId) => {
  try {
    const response = await axios.get(API_URL + `objetos/${objectId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Função para atualizar um objeto existente
export const updateObject = async (objectId, data) => {
  try {
    const response = await axios.put(API_URL + `objetos/${objectId}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Função para deletar um objeto existente
export const deleteObject = async (objectId) => {
  try {
    const response = await axios.delete(API_URL + `objetos/${objectId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```
Neste exemplo, temos quatro funções que correspondem às operações **CRUD**: **createObject** para criar um novo objeto, **getObject** para buscar um objeto existente, **updateObject** para atualizar um objeto existente e **deleteObject** para deletar um objeto existente. Cada função faz uma chamada Axios à API com a URL correta e os dados apropriados, e retorna a resposta da API em forma de objeto JSON. Note que cada função também trata possíveis erros que possam ocorrer durante a comunicação com a API.