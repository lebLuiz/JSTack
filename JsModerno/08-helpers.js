const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript'];

const includesString = tech.includes('Node');
const includesArray = array.includes('React');

const startsWith = tech.startsWith('No');
const endWith = tech.endsWith('js');

console.log({
    includesString,
    includesArray,
    startsWith,
    endWith
});