const Joke = require('../models/joke.model');

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json( {Joke: newJoke})
        })
        .catch( err => {
            res.json( {message: "Something went wrong", error:err})
        });
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => {
            res.json( {Joke: allJokes})
        })
        .catch( err => {
            res.json( {message: "Soemthing went wrong", error: err})
        })
}

module.exports.findOneJoke = (req, res) => {
    Joke.find( {_id: req.params.id})
        .then( oneJoke => {
            res.json({Joke: oneJoke})
        })
        .catch( err => {
            res.json({message: 'Something went wrong', error:err})
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne( {_id: req.params.id})
        .then( result => {
            res.json({result: result})
        })
        .catch( err => {
            res.json({message: 'Something went wrong', error:err})
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate( 
        {_id: req.params.id },
        req.body,
        { new:true, runValidators:true}
        )
            .then(updateJoke => {
                res.json( {Joke: updateJoke})
            })
            .catch( err => {
                res.json( {message: "Something went wrong", error:err})
            });
}