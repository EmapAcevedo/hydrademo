'use strict';
var hydraExpress = require('hydra-express');
var version=require('./package.json').version;
var hydra = hydraExpress.getHydra();
var config = require('./config.json');

function onRegisterRoutes() {
  var express = hydraExpress.getExpress();
  var api = express.Router();

  api.get('/', function(req, res) {
    res.send('Hey whats up!');
  });

  api.post('/:meh', function(req, res) {
    res.send(req.params.meh);
  });

  api.get('/:hola', function(req, res) {
    res.send({

     msg: `hello ${req.params.hola} from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
   });
  });

  hydraExpress.registerRoutes({
    '/api': api
  });

}

hydraExpress.init(config, onRegisterRoutes);
