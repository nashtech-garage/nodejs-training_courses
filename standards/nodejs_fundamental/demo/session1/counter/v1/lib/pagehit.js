const httpReferrer = require('./httpreferrer');

module.exports = class {

    // initialize
    constructor() {

        // counter storage
        this.counter = {};

    }

    // increase URL counter
    count(req) {

        let hash = httpReferrer(req);
        if (!hash) return null;

        // define count default
        this.counter[ hash ] = this.counter[ hash ] || 0;

        // return incremented count
        return ++this.counter[ hash ];
    }

};