// This will load our .env file and add the values to process.env,
require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    development: {
        dialect: "sqlite",
        storage: ":memory:"
    },
    production: {
        dialect: "sqlite",
        storage: "db/database.sqlite"
    }
};