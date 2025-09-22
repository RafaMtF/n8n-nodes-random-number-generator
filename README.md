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

```bash
   git clone https://github.com/RafaMtF/n8n-nodes-random-number-generato && cd seu-repo
```

2. Instale as dependências do projeto e faça a build:
```bash
   npm install
   npm run build
```

3. Construa e suba o container:
```bash
   docker compose up --build
```

4. Abra o editor do n8n. *[link para o painel do n8n](http://localhost:5678)*

5. No editor de workflow, adicione um nó de gatilho e procure pelo nó "Gerador de Nímero Aleatório".

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
