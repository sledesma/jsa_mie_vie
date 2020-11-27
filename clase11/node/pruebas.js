/*
const os = require('os'); // Información referente a la máquina

console.log(
    'Estás ejecutando Node.Js en una máquina de arquitectura ',
    os.arch(), 
    ' con ', 
    os.cpus().length, 
    ' procesadores');
    */

    /*
   const { spawn } = require('child_process');
   const ls = spawn('ls', ['-lh', '/usr']);
   
   ls.stdout.on('data', (data) => {
     console.log(`stdout: ${data}`);
   });
   
   ls.stderr.on('data', (data) => {
     console.error(`stderr: ${data}`);
   });
   
   ls.on('close', (code) => {
     console.log(`child process exited with code ${code}`);
   });
   */

const http = require('http');

http
.createServer((req, res) => {

    res.end('Hola mundo');

})
.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));

