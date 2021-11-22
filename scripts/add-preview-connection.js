const branch = require('current-git-branch')();
const { exec } = require('child_process');
const { getEnvironmentVariables } = require('./env');

if (['main', 'master'].includes(branch)) return;

const { DATABASE_URL } = getEnvironmentVariables();

exec(
  `echo "${DATABASE_URL}" | vercel env add DATABASE_URL preview ${branch}`,
  (_, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  }
);
