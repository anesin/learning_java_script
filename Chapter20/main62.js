console.log(`Current directory: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New Current directory: ${process.cwd()}`);