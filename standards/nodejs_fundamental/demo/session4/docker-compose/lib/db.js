const mongoose = require('mongoose');
const Settings = require('../settings');
let url = '';

if (Settings.db.MONGO_USERNAME) {
    url = `mongodb://${Settings.db.MONGO_USERNAME}:${Settings.db.MONGO_PASSWORD}@${Settings.db.MONGO_HOSTNAME}:
    ${Settings.db.MONGO_PORT}/${Settings.db.MONGO_DB}?authSource=admin`;
} else {
    url = `mongodb://${Settings.db.MONGO_HOSTNAME}:${Settings.db.MONGO_PORT}/${Settings.db.MONGO_DB}`;
}
mongoose.connect(url, {useNewUrlParser: true});
