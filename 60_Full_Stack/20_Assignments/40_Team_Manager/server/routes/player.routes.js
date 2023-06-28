const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.put('/api/players/:id', PlayerController.changeStatus);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}