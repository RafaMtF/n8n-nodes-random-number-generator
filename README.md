# 🚀 Projeto: Nó Customizado do n8n – Gerador de Números Aleatório

Este repositório contém um nó customizado para o n8n que gera números aleatórios. O projeto está preparado para rodar com o Docker Compose, facilitando a instalação e execução em qualquer ambiente.

## 📦 Funcionalidades

- Nó RandomNumberGenerator integrado ao n8n
- Configurações simples no editor visual
- Suporte a range customizado (min, max)
- Ícones customizados para modo dark e light

## 🛠️ Pré-requisitos

- Docker Desktop v28.4.0
- NodeJs v22.17

## ▶️ Como rodar com Docker

1. Clone o repositório:

```
   git clone https://github.com/RafaMtF/n8n-nodes-random-number-generator && cd n8n-nodes-random-number-generator
```

2. Instale as dependências do projeto e faça a build:

```
   npm install
   npm run build
```

3. Construa e suba o container:

```
   docker compose up -d
```

4. Abra o editor do n8n. _[link para o painel do n8n](http://localhost:5678)_

5. No editor de workflow, adicione um nó de gatilho e procure pelo nó "Random".

6. Adicione o nó ao workflow e clique no botão _"Execute step"_, o número aleatório será mostrado na aba de _Outputs_ na direita.

## 🔧 Configuração do Ambiente

1. Configure as variáveis de ambiente no arquivo `.env`:

```env
   POSTGRES_USER=adminUser
   POSTGRES_PASSWORD=adminUserPassword
   POSTGRES_DB=n8n
```

2. O PostgreSQL será configurado automaticamente através do script `init-data.sh` quando o container for iniciado

## 📂 Estrutura do projeto

```
.
├── .env
├── .gitignore
├── .prettierrc.js
├── docker-compose.yml
├── Dockerfile
├── eslint.config.mjs
├── LICENSE.md
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── nodes/
    └── RandomNumberGenerator/
        ├── random-dark.svg
        ├── random-light.svg
        ├── RandomNumberGenerator.node.json
        └── RandomNumberGenerator.node.ts
```

## 📜 Licença

[MIT License](./LICENSE.md)
