const {execSync} = require('child_process');
const {argv} = process;

const getCurrentBranch = () => execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

const branchName = argv[2] || getCurrentBranch();
execSync(`git checkout master && git pull && git checkout ${branchName} && git rebase master`, { stdio: 'inherit' });
