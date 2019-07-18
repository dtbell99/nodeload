const fetch = require('node-fetch');
const _cliProgress = require('cli-progress');

const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic);

const results = {
    'success': 0,
    'failure': 0,
    'error': 0
}

var cntr = 0;
var times = 2000;
var startTime = new Date().getTime();
bar1.start(times, 0);

var node = 'http://localhost:3000/test';
var java = 'http://localhost:8080/servlettest/TestServlet';

for (var i = 0; i < times; i++) {
    fetch(java, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 200) {
            results.success = results.success + 1;
        } else {
            console.log('failure: ' + response.status);
        }
    }).catch(error => {
        console.log(error);
    });
    cntr++;
    bar1.update(cntr);
    if (cntr >= times) {
        bar1.stop();
        var stopTime = new Date().getTime();
        var totalTime = stopTime - startTime;
        console.log('Total Time: ' + (totalTime / 1000) + 's');
        console.log('Runs    :' + cntr);
        console.log('Times   :' + times);
        console.log(JSON.stringify(results));
    }
}