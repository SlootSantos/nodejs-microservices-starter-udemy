const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // API GATEWAY
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',
      watch: true,
      env: {
        PORT: 3001,
        SERVICE_DB_PORT: 4001,
        Q_URI:
          'amqp://elrvksen:wwN-1_xd2a3921zyOzvSZJNJHpI-MAv1@hound.rmq.cloudamqp.com/elrvksen'
      },
      instances: 'max',
      exec_mode: 'cluster'
    },

    // DB SERVICE
    {
      name: 'DB Service',
      script: basePath + '/database_service/server.js',
      watch: true,
      env: {
        PORT: 4001
      }
    },

    // MAILING SERVICE
    {
      name: 'Mailing Service',
      script: basePath + '/mailing_service/index.js',
      watch: true,
      env: {
        MJ_API_PUBLIC: 'd05a550f686bf7cbd7ca4ff9ab6ae507',
        MJ_API_SECRET: 'aaeb4c341f543eae3e7154da8f52143b',
        Q_URI:
          'amqp://elrvksen:wwN-1_xd2a3921zyOzvSZJNJHpI-MAv1@hound.rmq.cloudamqp.com/elrvksen'
      }
    }
  ]
};
