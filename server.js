'use strict';

const express = require('express');
const redis = require('redis');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
const client = redis.createClient(process.env.REDIS_URL);

const app = express();
app.get('/', (req, res) => {
    console.log("Hello world\n");
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);