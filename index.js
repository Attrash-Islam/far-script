#!/usr/bin/env node
const {execSync} = require('child_process');
const {argv} = process;

const branchName = argv[2] || '-';
execSync(`git checkout master && git pull origin master && git checkout ${branchName} && git rebase master`, { stdio: 'inherit' });
