module.exports = {
  apps : [{
    name   : "limit worker",
    script : "./src/server.js",
    instances : "max",
    env:{
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]

}