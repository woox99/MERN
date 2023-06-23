const PersonController = require('../controllers/person.controller');

module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.findAllPeople);
    app.get('/api/people/:id', PersonController.findOne);
    app.post('/api/people', PersonController.createPerson);    
}

