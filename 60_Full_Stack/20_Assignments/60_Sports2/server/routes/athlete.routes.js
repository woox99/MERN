const AthleteController = require('../controllers/athlete.controller');

module.exports = app => {
    app.post('/api/athletes', AthleteController.createAthlete);
    app.get('/api/athletes', AthleteController.findAllAthletes);
    app.get('/api/athletes/:id', AthleteController.findOneAthlete);
    app.put('/api/athletes/:id', AthleteController.updateAthlete);
    app.delete('/api/athletes/:id', AthleteController.deleteAthlete);

}