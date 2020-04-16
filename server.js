var express = require('express');
var app = express();

// Listen

var proxy = require('express-http-proxy');

app.use(express.static('public'));

app.use('/api', proxy('http://ibmcloudappmgmt-ibm-cem-cem-users.kube-system.svc:6002'))

app.listen(3001);
console.log('Listening on localhost:'+ 3001);