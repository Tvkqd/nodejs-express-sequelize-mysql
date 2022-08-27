module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "yourpassword",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        //number of connection in pool
      max: 5,
      min: 0,
      //maximum time, in milliseconds, that pool 
      //will try to get connection before throwing error
      acquire: 30000,
      //maximum time, in milliseconds, 
      //that a connection can be idle before being released
      idle: 10000
    }
  };
