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

// Replace only <!-- AGE_PLACEHOLDER --> with the age
readme = readme.replace(/<!-- AGE_PLACEHOLDER -->/, `${age}`);

fs.writeFileSync(readmePath, readme);