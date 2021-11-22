const { existsSync, readFileSync } = require('fs');

function getEnvironmentVariables(file = '.env') {
  const env = {};

  if (!existsSync(file)) return env;

  readFileSync(file, 'utf-8')
    .split('\n')
    .forEach((line) => {
      const [key, value] = line.split(/=(.+)/);

      if (!key) return;

      env[key] = value;
    });

  return env;
}

module.exports = {
  getEnvironmentVariables,
};
