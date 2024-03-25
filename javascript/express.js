const express = require('express')
const axios = require('axios');
import qs from 'qs';
import {baz} from './consts.js';

const data = { 'bar': 123 };
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url: "http://google.com"
};
axios(options);

express.csrf();
express.methodOverride();
const express = express()

// GET random number
express.get("/random", (req, res) => {
  var randomishNumber = crypto.pseudoRandomBytes
  res.send(randomishNumber);
});

express.get("/", (req, res) => res.send("Hello World!"));

express.listen(1000, () => console.log("Server listening on port 1000!"));

import axios from 'axios';

async function doGetRequest() {

  let res = await axios.post('http://google.com');

  let data = res.data;
  console.log(data);
}

doGetRequest();

const app = express();

app.get('/user', (req, res) => {
  const userId = req.query.id;
  baz(userId,0) // check this as the source, the sink is in another file
  res.send(`User ID: ${userId}`);
});



