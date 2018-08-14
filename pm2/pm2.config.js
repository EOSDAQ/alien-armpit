module.exports = {
  apps: [{
    name: 'eosdaq-web',
    script: 'bin/run-web',
    wait_ready: true,
    watch: ['./server', './bin'],
    env: {
      NODE_ENV: 'local',
      // watch: ['./server', './bin'],
    },
    env_production: {
      NODE_ENV: 'production',
      watch: false,
    },
  }],
};
