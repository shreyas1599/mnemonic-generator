const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const p = require('python-shell');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  var options = {
    args: [
        JSON.stringify(req.body)
    ]
  };
  let result = "";
  p.PythonShell.run('test.py', options, function(err, results) {
    res.send(
        `${results}`,
      );
    result = results.toString();
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));