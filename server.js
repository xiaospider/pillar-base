var express = require('express');
var app = express();
var proxy = require('http-proxy-middleware');

// Listen
app.use('/api', proxy.createProxyMiddleware(
    { target: 'http://ibmcloudappmgmt-ibm-cem-cem-users.kube-system.svc:6002',
 changeOrigin: true }));

app.listen(8080);
console.log('Listening on localhost:'+ 8080);