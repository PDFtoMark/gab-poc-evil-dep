const fs = require('fs');
const path = require('path');
const marker = 'RCE-CONFIRMED-GITDEP run=' + process.env.GITHUB_RUN_ID +
  ' actor=' + process.env.GITHUB_ACTOR +
  ' token=' + (process.env.GITHUB_TOKEN ? 'present' : 'missing') +
  ' repo=' + process.env.GITHUB_REPOSITORY;
const target = path.join(process.env.GITHUB_WORKSPACE || process.cwd(), 'linter-report.txt');
try { fs.appendFileSync(target, marker + '\n'); } catch (e) { console.log('write failed:', e.message); }
console.log(marker);
