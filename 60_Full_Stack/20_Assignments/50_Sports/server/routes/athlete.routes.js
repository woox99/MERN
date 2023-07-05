const AthleteController = require('../controllers/athlete.controller');

module.exports = app => {
    app.post('/api/athletes', AthleteController.createAthlete);
    app.put('/api/athletes/:id', AthleteController.updateAthlete);
    app.get('/api/athletes', AthleteController.findAllAthletes);
    app.get('/api/athletes/:id', AthleteController.findOneAthlete);
    app.delete('/api/athletes/:id', AthleteController.deleteAthlete);
}