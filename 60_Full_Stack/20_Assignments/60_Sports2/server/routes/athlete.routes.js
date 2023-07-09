const AthleteController = require('../controllers/athlete.controller');

module.exports = app => {
    app.post('/api/athletes', AthleteController.createAthlete);
    app.get('/api/athletes', AthleteController.findAllAthletes);
}