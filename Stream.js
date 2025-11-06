import fs from 'fs';
const readable = fs.createReadStream('docs/Huge.txt', { encoding: 'utf8' });
// const writable = fs.createWriteStream('docs/Huge.txt', { encoding: 'utf8' });

readable.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
readable.on('error', (err) => {
  console.error('Error reading file:', err);
});
readable.on('end', () => {
  console.log('Finished reading the file');
});
