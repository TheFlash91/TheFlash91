const fs = require('fs');

const birthDate = new Date('1991-07-21');
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const readmePath = './readme.md';
let readme = fs.readFileSync(readmePath, 'utf8');

// Replace only the age number in the SVG line
readme = readme.replace(
  /I'm\+\d+\+years\+old/,
  `I'm+${age}+years+old`
);

// Optionally, if you use <!-- AGE_PLACEHOLDER --> elsewhere, replace it with just the age
readme = readme.replace(/<!-- AGE_PLACEHOLDER -->/, `${age}`);

fs.writeFileSync(readmePath, readme);