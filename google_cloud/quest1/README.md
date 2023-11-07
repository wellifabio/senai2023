# Create and Manage Cloud Resources (6 créditos)

## Desafio

**IMPORTANTE:** Trocar os nomes que estão em **NEGRITO** para os que forem exigidos no seu **laboratório**, alterar também a região e zona conforme seu **laboratõrio**.

## ****Tarefa 1: crie uma instância para o projeto jumphost****

Criar uma VM

- Dê o nome **`nucleus-jumphost-137`** à instância.
- Use um tipo de máquina *f1-micro*.
- Use o tipo de imagem padrão (Debian Linux).

## ****Tarefa 2: crie um cluster de serviço do Kubernetes****

• criar um cluster na zona **us-east1-b** para hospedar o serviço;

```bash
    gcloud config set compute/zone us-east1-b
    gcloud container clusters create cluster1
```

• usar o contêiner "hello-app" do Docker (`gcr.io/google-samples/hello-app:2.0`) como um marcador de posição que será substituído pelo trabalho da equipe mais tarde;

```bash
    gcloud container clusters get-credentials cluster1
    kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:2.0
```

• expor o app na porta **XXXX**.

```bash
    kubectl expose deployment hello-server --type=LoadBalancer --port 8083
```
## ****Tarefa 3: configure um balanceador de carga HTTP****

- Rodar **Script do começo dessa etapa**:
    
- Crie um modelo de instância.
    
    ```jsx
    gcloud compute instance-templates create web-server-template --metadata-from-file startup-script=startup.sh --network default --machine-type g1-small --region us-east1
    ```
    
- Crie um pool de destino.
    
    ```jsx
    gcloud compute instance-groups managed create web-server-group --base-instance-name web-server --size 2 --template web-server-template --region us-east1
    ```
    
- Defina uma regra de firewall chamada `**pegardoseulab**` para permitir o tráfego (80/tcp).
    ```jsx
    gcloud compute firewall-rules create **accept-tcp-rule-980** \
              --allow tcp:80 \
              --network default
    
    ```
- Crie uma verificação de integridade.
    ```jsx
    gcloud compute http-health-checks create http-basic-check
    ```
- Crie um grupo de instâncias gerenciadas.
    ```jsx
    gcloud compute instance-groups managed \
            set-named-ports web-server-group \
            --named-ports http:80 \
            --region us-east1
    ```
- Crie um serviço de back-end e anexe o grupo gerenciado de instâncias à porta chamada (http:80).
    
    ```jsx
    gcloud compute backend-services create web-server-backend \
              --protocol HTTP \
              --http-health-checks http-basic-check \
              --global
    ```
    
    ```jsx
    gcloud compute backend-services add-backend web-server-backend \
              --instance-group web-server-group \
              --instance-group-region us-east1 \
              --global
    ```
- Crie um mapa de URL e direcione para ele o encaminhamento de solicitações do proxy HTTP.
    
    ```jsx
    gcloud compute url-maps create web-server-map \
              --default-service web-server-backend
    ```
- Crie uma regra de encaminhamento.
    ```jsx
    gcloud compute target-http-proxies create http-lb-proxy \
              --url-map web-server-map
    ```
    ```jsx
    gcloud compute forwarding-rules create **accept-tcp-rule-980** \
         --global \
         --target-http-proxy http-lb-proxy \
         --ports 80
    ```
    ```jsx
    gcloud compute forwarding-rules list
    ```
**IMPORTANTE**: Aguarde a criação do balanceamento por volta de 7min antes de verificar a etapa 3