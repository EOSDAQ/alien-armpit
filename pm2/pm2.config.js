module.exports = {
  apps: [{
    name: 'eosdaq-web',
    script: 'bin/run-web',
    wait_ready: true,
    watch: ['./server', './bin'],
    env_production: {
      watch: false,
    },
  }], 
};
