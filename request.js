//Ejemplo para consulta un api con https NODE.js

var options = {
  host: 'localhost', // direccion de la api solo el nombre del domionio
  path: '/', // path de la api que se va a consultar
  port: 443, // puerto por default
  method: 'GET', // metodo 
  rejectUnauthorized: false, //importante para no ocupar certificado de ssl
  headers: {
   'Authorization': 'Basic ' + new Buffer('username'+ ':' + 'password').toString('base64'),

  } 
  /*auth: { 
    user: username,
    password: password
  }*/
};

var req = https.request(options, (res) => {
console.log('statusCode:', res.statusCode);
console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', (e) => {
  console.error(e);
});

// Ejemplo para consultar un api con request NODE.js
var options = {
  url: 'localhost/',//url de la api a consultar con todo y el path
  rejectUnauthorized: false, //importante para no ocupar certificado de ssl
  auth: {
    user: username,
    password: password
  }
  /*headers: {
   'Authorization': 'Basic ' + new Buffer('username'+ ':' + 'password').toString('base64'),

  }*/
}

request(options, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(body)
})
