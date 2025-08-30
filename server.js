const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing
app.use(cors());
// Parse incoming JSON requests
app.use(bodyParser.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the Sprint Retrospective Aggregator!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});