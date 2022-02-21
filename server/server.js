const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');


// app
const app = express();

app.use(express.static(__dirname + '/public'));

// connect DB
mongoose.connect(process.env.DATABASE).then(() => console.log('DB Connected'))
.catch((err) => console.log('DB Connect Error',err))


// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());
app.use((req, res, next) => {
   let ALLOW_ORIGIN = ['domain-a.com', 'domain-b.com', 'domain-c.com']
   let ORIGIN = req.headers.origin
      if (ALLOW_ORIGIN.includes(ORIGIN)) {
        res.header('Access-Control-Allow-Origin', ORIGIN)
      }
      res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
      res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
      return next()
   })

 

// routes
readdirSync('./routes')
.map((r) => app.use("/api", require('./routes/' + r)))


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
 
