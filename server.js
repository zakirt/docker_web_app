'use strict';

const path = require('path');
const express = require('express');
const redis = require('redis');
const logger = require('./utils/logger');

// Constants
const PORT = process.env.NODE_PORT;
const HOST = process.env.NODE_HOST;
const client = redis.createClient(process.env.REDIS_URL);

const app = express();
const staticPath = path.join(__dirname, 'public');

app.use(express.static(staticPath));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT);
logger.logInfo(`Running on http://${HOST}:${PORT}`);
