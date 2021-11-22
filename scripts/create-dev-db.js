const branch = require('current-git-branch')();
const { exec } = require('child_process');
const os = require('os');
const { writeFileSync } = require('fs');
const { getEnvironmentVariables } = require('./env');

if (['main', 'master'].includes(branch)) {
  console.log(`Can't create a dev db from ${branch} branch!`);
  return;
}

const DATABASE_NAME = 'teamsmemes';

exec(`pscale branch show ${DATABASE_NAME} ${branch}`, (_, __, stderr) => {
  const branchExists = !stderr;

  if (branchExists) return;

  const user = os.hostname().toLowerCase().replace(/\./, '-');

  exec(`git push -u origin ${branch}`);

  createDatabaseAndConnection(branch, user, 'DATABASE_URL');
  createDatabaseAndConnection(`${branch}-shadow`, user, 'SHADOW_DATABASE_URL');
});

function createDatabaseAndConnection(branch, user, environmentVariable) {
  exec(
    `pscale branch create ${DATABASE_NAME} ${branch}`,
    (_, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);

      exec(
        `pscale password create ${DATABASE_NAME} ${branch} ${user} --format "json"`,
        (_, stdout, stderr) => {
          const { id, plain_text, database_branch } = JSON.parse(stdout);
          const connectionString = `mysql://${id}:${plain_text}@${database_branch.access_host_url}/${DATABASE_NAME}?sslaccept=strict`;

          setEnvironmentVariable(environmentVariable, connectionString);

          console.log(stderr);
        }
      );
    }
  );
}

function setEnvironmentVariable(key, value) {
  const file = '.env';
  const env = getEnvironmentVariables(file);

  env[key] = `"${value}"`;

  if (env === {}) writeFileSync(file, '');

  let content = '';

  Object.entries(env).forEach(([key, value]) => {
    content += `${key}=${value}\n`;
  });

  writeFileSync(file, content);
}
