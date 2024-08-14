let duck = require('duckdb');

new duck.Database(':memory;').all("SELECT 1 as abc,'hello' ", (err, res) => {
  console.log(res);
});
