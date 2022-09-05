const { DataSource } = require('typeorm');

const MySQLDatabase = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE
})

 MySQLDatabase.initialize()
.then(() => {
  console.log("DataSource has been initialized");
})
.catch((err) => {
  console.log("Error occurred during initialization", err);
  MySQLDatabase.destroy();
});

module.exports = {
  MySQLDatabase
}