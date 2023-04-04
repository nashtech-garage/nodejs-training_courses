"use strict";

const Fs = require('fs');
const Path = require('path');
const { Sequelize } = require('sequelize');
const Settings = require('../../settings');
const dbSetting = Settings[Settings.env];

const sequelize = new Sequelize(dbSetting);
const db = {};

// Read Model file and import
Fs.readdirSync(__dirname)
    // Filter is not folder, and is not index.js
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(file => {
        const model = sequelize.import(Path.join((__dirname, file)));
        db[model.name] = model;
    });
db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(db);

module.exports = db;
