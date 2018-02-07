const fs = require('fs');
const data = {
    date: '2018-2-7',
    time: '13:00',
    weather: 'sun'
};
const text = JSON.stringify(data, null, '--');
fs.writeFileSync('./fuck.json', text);