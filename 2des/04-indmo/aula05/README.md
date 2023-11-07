# Aula05 - Criar APKs para emuladores e dispositivos Android

O formato de arquivo padrão usado ao criar aplicativos Android com o EAS Build é um Android App Bundle (AAB/ .aab ). Este formato é otimizado para distribuição na Google Play Store. No entanto, os AABs não podem ser instalados diretamente no seu dispositivo. **Para instalar uma compilação diretamente em seu dispositivo ou emulador Android, você precisa criar um Pacote Android (APK/ .apk ).**

## Passos
- Certifique-se de ter uma conta no site oficial do [Expo](https://expo.dev/)
- [Tutorial oficial para ANdroid e iOS](https://docs.expo.dev/build/setup/)
- Certifique-se de que o seu projeto está configurado corretamente com o Expo. Você pode seguir as instruções no site oficial do [Expo](https://expo.dev/) para criar um novo projeto ou adaptar um projeto existente.
- Segue um aplicativo de exemplo criado na segunda aula **./bitola**
- Caso o Expo CLI não esteja instalado em sua máquina com o seguinte comando:
```cmd
npm install -g expo-cli
```

- Instale EAS, interpretador de comandos do Expo globalmente
```cmd
npm install -g eas-cli
```
- ou caso não funcione com o npm utilize
```cmd
npx eas-cli
```
- Faça login no Expo via EAS
```cmd
eas login
```
- ou
```cmd
npx eas login
```

### Configurando um perfil para criar APKs
Para gerar um **.apk **, modifique o **eas.json** para o código a seguir:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}
```
- Agora você pode executar sua compilação com o seguinte comando:
```cmd
eas build -p android --profile preview
ou
npx eas build -p android --profile preview
```
- Para gerar a versão para PlayStore
```cmd
eas build -p android
ou
npx eas build -p android
```
- Aguarde enquanto o Expo compila seu aplicativo. Isso pode levar alguns minutos.

- Quando o processo estiver concluído, você receberá um link para baixar o arquivo APK. Baixe-o e instale-o em um dispositivo Android para testá-lo.

- Se estiver tudo funcionando corretamente, você pode compartilhar o APK com outras pessoas ou publicá-lo no Google Play Store.

Obs: Lembre-se de que a geração do arquivo APK pode levar algum tempo e pode haver alguns problemas técnicos que precisam ser resolvidos. Certifique-se de seguir as instruções do Expo com cuidado e procurar ajuda se necessário.