const fs = require('fs');
const path = require('path');

try {
    fs.writeFileSync(
        path.join(__dirname, 'hello.txt'),
        'hello from Node!',
        function(err) {
            if (err)
                return console.error('Error writing to file.');
        });
}
catch (err) {
    console.error('Error writing to file.');
}
