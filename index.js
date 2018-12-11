#!/usr/bin/env node
const {execSync} = require('child_process');
const {argv} = process;

const getCurrentBranch = () => execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

const branchName = argv[2] || getCurrentBranch();
execSync(`git fetch origin && git rebase origin/master ${branchName}`, { stdio: 'inherit' });
