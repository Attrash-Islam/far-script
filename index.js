#!/usr/bin/env node
//@ts-check
const {execSync} = require('child_process');
const {createInterface} = require('readline');
const {argv} = process;

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
    const basedOnBranch = (!answer ? 'master' : answer);
    execSync(`git checkout ${basedOnBranch} && git pull origin ${basedOnBranch} && git checkout - && git rebase ${basedOnBranch}`, { stdio: 'inherit' });
});
