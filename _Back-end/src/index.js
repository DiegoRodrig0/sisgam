require('dotenv').config({ path: 'config.env' });
const cors = require('cors')
const express = require('express');
const routes = require('./routes/routes');
const app = express();
const port = process.env.REACT_APP_SERVER_PORT;

app.use(express.json());
app.use(cors());

function main() {
      
    routes(app);
    app.listen(port);
}

main();