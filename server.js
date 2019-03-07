'use strict';

const express = require('express');
const redis = require('redis');
const logger = require('./utils/logger');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const client = redis.createClient(process.env.REDIS_URL);

const app = express();
app.get('/', (req, res) => {
    logger.logInfo('Hello world\n');
});

app.listen(PORT);
logger.logInfo(`Running on http://${HOST}:${PORT}`);
