const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Web Node.js',
      version: '1.0.0',
      description: 'Uma API web simples com documentação Swagger',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor de desenvolvimento',
      },
    ],
  },
  apis: ['./routes/*.js', './index.js'], // Caminhos para arquivos com documentação JSDoc
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Rota para servir a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota raiz da API
 *     description: Retorna uma mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bem-vindo à API Web Node.js!"
 */
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bem-vindo à API Web Node.js!',
    documentation: `http://localhost:${PORT}/api-docs`
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em: http://localhost:${PORT}/api-docs`);
});

module.exports = app;
