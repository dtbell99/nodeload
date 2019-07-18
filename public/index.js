function runTest() {
    var times = document.getElementById('runs').value;
    for (var i = 0; i < times; i++) {
        fetch('/test/' + (i + 1)x, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                console.log('good');
            } else {
                console.log('bad');
            }
        });
    }
}