const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
    
    app.get('/api/status/:gameNum', PlayerController.gameStatus);
    app.put('/api/status/:id', PlayerController.changeStatus);
}