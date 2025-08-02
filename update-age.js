const fs = require('fs');

const birthDate = new Date('1991-07-21');
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// Get repo info from environment variables set by GitHub Actions
const repo = process.env.GITHUB_REPOSITORY;
const repoUrl = `https://github.com/${repo}`;

const readmePath = './readme.md';
let readme = fs.readFileSync(readmePath, 'utf8');

// Replace age placeholder
readme = readme.replace(/<!-- AGE_PLACEHOLDER -->/, `${age}`);

// Replace repo URL placeholder
readme = readme.replace(/<!-- REPO_URL_PLACEHOLDER -->/, `${repoUrl}`);

fs.writeFileSync(readmePath, readme);