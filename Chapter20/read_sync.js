const fs = require('fs');
const path = require('path');

try {
    fs.readFileSync(
        path.join(__dirname, 'hello.txt'),
        {encoding: 'utf8'},
        function(err, data) {
            if (err)
                return console.error('Error reading file.');
            console.log('Read file contents:');
            console.log(data);
        });
}
catch (err) {
    console.error('Error reading file.');
}
