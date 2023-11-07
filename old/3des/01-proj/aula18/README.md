# Upload de arquivos (NodeJS x Armazenamento de blobs Azure)

O primeiro passo para armazenar arquivos (imagens, textos, dados não estruturados, semi-estruturados e estruturados) é criar uma conta de armazenamento na Azure, conforme o tutorial a seguir [Explorar o armazenamento do Azure](https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-02-storage-lab.html)

- Neste repositório há um exemplo de código **NodeJS** que envia arquivos para uma **pasta/conteiner de blobs** da azure: [API uploadaulas](./uploadaulas)
- E um exemplo de **[Front-End](./frontend)** com um formulário que envia e uma área que mostra a imagem enviada.
- Para testar o Front-End a API precisa estar respondendo na porta 3000