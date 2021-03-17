var express = require('express');
var axios = require('axios')
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();

var url = process.env.URL;

function makeGetRequest(){
  axios.get(url)
  .then(response => {
    console.log('pinged successfully\n');  
  })
  .catch(error => {
    console.log(error);
  });
}

interval = setInterval(() => {
  makeGetRequest()
}, 1000);

module.exports = router;
