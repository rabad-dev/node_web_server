
const { envs } = require('./config/env.js');
const { startServer } = require('./server/server.js');

const main = ()=>{
    //console.log(envs);
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })

};

//funcion agnostica: porque no tiene nombre. (desconocida)(Funcion anonima)
//funcion autoconvocada: porque se ejecuta desde que se declara (con los parentesis finales)
//inmediately invoked function expression (IIFE)
//Self-Executing Anonymous Function
(async ()=>{
    main();
})();

 
