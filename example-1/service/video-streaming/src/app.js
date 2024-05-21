const express = require('express');
const morgan = require('morgan');

class App {
    constructor(){
        this.app = express();
        this.logger();
        this.getRouting();
    }

    logger(){
        this.app.use(morgan('tiny'))
    }

    getRouting(){
        this.app.use(require('./controller'));
    }
}

module.exports = new App().app