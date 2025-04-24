const express = require('express');
const cors = require('cors');
const purchaseRoutes = require('./routes/purchaseRoutes');
const { initializeDatabase } = require('./config/dbConfig');
const swaggerUi = require('swagger-ui-express');
const swaggerDocsConfig = require('./config/swaggerConfig');
require('dotenv').config();

const port = process.env.PORT;
const frontendUrl = process.env.FRONTEND_URL;

const app = express();

app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  exposedHeaders: ['Access-Control-Allow-Origin']
}));

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocsConfig));
app.use('/api', purchaseRoutes);


const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server running in: ${port}`);
    });
  } catch (error) {
    console.error('Error initializating server:', error);
  }
};

startServer();