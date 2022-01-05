const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const photoRoute = require('./app/routes/photo');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        swagger: '2.0',
        info: {
            title: 'Photogram API',
            version: '1.0.0'
        },
    },
    apis: ['./app/routes/photo.js'],
}

const swaggerapiSpecification = swaggerJsDoc(options);
console.log(swaggerapiSpecification);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerapiSpecification));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/v1/api/photo', photoRoute);
mongoose
    .connect('mongodb://mongodb:27017/', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'photogramdb',
        }
    )
    .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Photogram app listening at http://localhost:${port}`);
})