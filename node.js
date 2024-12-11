const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let gameData = {}; /

app.post('/send-command', (req, res) => {
    const { playerId, command } = req.body;
    if (!playerId || !command) {
        return res.status(400).send({ success: false, error: 'Invalid data' });
    }
    gameData[playerId] = command;
    console.log(`Command received: ${command} for Player ID: ${playerId}`);
    res.status(200).send({ success: true });
});

app.get('/get-commands', (req, res) => {
    res.status(200).send(gameData);
    gameData = {}; 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
