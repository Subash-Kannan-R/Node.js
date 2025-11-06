import fs from 'fs';
if(!fs.existsSync('docs')){
    fs.mkdir('docs', (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Directory created');
    }
});
}

fs.writeFile('docs/text.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('File created');
    }
});

if(fs.existsSync('docs/text.txt')){ 
    fs.readFile('docs/text.txt', (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(data.toString);
        }
    });
}

if(!fs.existsSync('docs')){
    fs.rmdir('docs', (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Directory deleted');
    }
});
}