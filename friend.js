var hydraExpress = require('hydra-express');
var hydra = hydraExpress.getHydra();
var config = require('./config.json');

config.hydra.serviceName = 'friend';

hydraExpress.init(config, () => {})
  .then((serviceInfo) => {
    console.log('serviceInfo', serviceInfo);
    let message = hydra.createUMFMessage({
      to: 'hello:[get]/api',
      from: 'friend:/',
      body: {}
    });
    return hydra.makeAPIRequest(message)
      .then((response) => {
        console.log('response', response);
      });
  })
  .catch(err => console.log('err', err));
