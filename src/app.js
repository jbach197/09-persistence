'use strict';

let http = require('http');

const router = require('./lib/router.js');
const api = require('./api/api.js');

let running = false;

const app = http.createServer(router.route);

module.exports = {
    start:(port) => {
        if(!running) {
            app.listen(port, (err) => {
                if(err) {throw err;}
                running = true;
                console.log('server is on port', port);
            });
        }
        else {
            console.log('server is already running');
        }
    },
    stop: () => {
        app.close(() => {
            running = false;
            console.log('server has been stopped');
        });
    },
};

