const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
      myapi: '3.0.0',
      info: {
        title: 'Bob s Farm API',
        version: '1.0.0',
        description: 'API documentation',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
    apis: ['./routes/*.js'],  };

const swaggerDocsConfig = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocsConfig;