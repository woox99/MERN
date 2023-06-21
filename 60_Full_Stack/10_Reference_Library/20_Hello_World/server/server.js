const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const personRoutes = require('./routes/person.routes');
personRoutes(app);


app.listen(8000, () => {
    console.log('Server is all fired up')
});