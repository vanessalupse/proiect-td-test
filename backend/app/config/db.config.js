module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "29VANEVINERI2000",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
