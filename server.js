const express = require('express');
const connectToDatabase = require('./config/connection');
const routes = require('./routes'); // This points to routes/index.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDatabase();

// Use the aggregated routes
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
