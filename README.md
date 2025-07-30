# API Web Node.js

Uma API web simples construída com Node.js, Express e documentação Swagger.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm

## 🚀 Instalação

1. Clone o repositório ou baixe os arquivos
2. Instale as dependências:
```bash
npm install
```

## 🏃‍♂️ Executando o Projeto

### Modo de Desenvolvimento (com auto-restart)
```bash
npm run dev
```

### Modo de Produção
```bash
npm start
```

A API estará disponível em: `http://localhost:3000`

## 📚 Documentação

A documentação da API (Swagger UI) está disponível em:
`http://localhost:3000/api-docs`

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Swagger JSDoc** - Geração de documentação OpenAPI
- **Swagger UI Express** - Interface para documentação
- **Nodemon** - Auto-restart durante desenvolvimento

## 📁 Estrutura do Projeto

```
.
├── .github/
│   └── copilot-instructions.md
├── .vscode/
│   └── tasks.json
├── index.js                 # Arquivo principal da API
├── package.json             # Configurações e dependências
└── README.md               # Este arquivo
```

## 🔧 Scripts Disponíveis

- `npm start` - Executa a aplicação em modo de produção
- `npm run dev` - Executa a aplicação em modo de desenvolvimento com nodemon

## 📝 Funcionalidades

- ✅ API REST básica com Express
- ✅ Documentação automática com Swagger
- ✅ Rota base de boas-vindas
- ✅ Configuração para desenvolvimento e produção

## 🚧 Próximos Passos

Este projeto fornece uma base sólida para desenvolver uma API REST. Você pode:

1. Adicionar novos endpoints
2. Implementar autenticação
3. Conectar a um banco de dados
4. Adicionar testes
5. Implementar validação de dados

## 📄 Licença

ISC
