#!/usr/bin/env node
//@ts-check
const {execSync} = require('child_process');
const {createInterface} = require('readline');
const {argv} = process;

const branchName = argv[2] || '-';

function ask(question, callback) {
    var r = createInterface({
        input: process.stdin,
        output: process.stdout});
    r.question(question, function(answer) {
        r.close();
        callback(answer);
    });
}

ask('Based on master? [ENTER]: ', function(answer) {
    const branch = (!answer ? 'master' : answer);
    execSync(`git checkout master && git pull origin master && git checkout ${branchName} && git rebase ${branch}`, { stdio: 'inherit' });
});
