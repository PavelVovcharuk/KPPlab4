const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')

app = express();
mongoose.Promise = global.Promise

app.use(serveStatic(__dirname + "/dist"));
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(require('./routes/posts'))


mongoose.connect(config.dbURL, config.dbOptions)

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))
