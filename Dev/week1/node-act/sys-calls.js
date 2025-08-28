//step 1

const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
        
    }
});

fs.writeFile('output.txt', 'This is some sample data.', (err) =>{
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to output.txt');
        
    }
});

//step 2
const os = require('os');

///a
console.log('Hostname:', os.hostname());
//b
console.log('Platform:', os.platform());
//c
console.log('Available:', os.arch());

//optional task
fs.writeFile('log.txt', os.hostname(), (err) => {
    if(err){
        console.error('Oops an error occured.');
    } else {
        console.log('host name saved in log.txt');
    };
});

fs.writeFile('log.txt', os.platform(), (err) => {
    if(err){
        console.error('Oops an error occured.');
    } else {
        console.log('platform saved in log.txt');
    };
});

const cpuInfo = os.cpus();
console.log(cpuInfo);