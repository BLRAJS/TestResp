let express = require('express');
let cors = require('cors')
let app = express();

let airports = require('./airports.json');
app.use(cors());
app.get('/', (req, res) => res.send('Kiosk imaginary backend at your service :) Go to /cities'));

app.get('/airports', (req, res) => res.json(airports.airports));

app.listen(3000, () => console.log('App listening on port 3000!'));